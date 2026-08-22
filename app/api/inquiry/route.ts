import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

import {
  createSupabaseCaptchaContextFromEnv,
  verifyCaptchaSubmission,
} from '@/lib/inquiry-captcha'

type InquiryRequest = {
  name?: unknown
  email?: unknown
  company?: unknown
  subject?: unknown
  message?: unknown
  captchaScope?: unknown
  captchaToken?: unknown
  captchaAnswer?: unknown
}

export async function POST(request: Request) {
  let input: InquiryRequest
  try {
    input = await request.json() as InquiryRequest
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = String(input.name ?? '').trim()
  const email = String(input.email ?? '').trim()
  const message = String(input.message ?? '').trim()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  const tenantId = process.env.NEXT_PUBLIC_TENANT_ID?.trim()
  const secret = process.env.CAPTCHA_SECRET?.trim()
  if (!url || !anonKey || !tenantId || !secret) {
    return NextResponse.json({ error: 'Online inquiry is temporarily unavailable.' }, { status: 503 })
  }

  try {
    const { store, tenantId: captchaTenantId, siteScope } = createSupabaseCaptchaContextFromEnv()
    const captchaResult = await verifyCaptchaSubmission({
      secret,
      store,
      tenantId: captchaTenantId,
      siteScope,
      scope: String(input.captchaScope ?? ''),
      token: String(input.captchaToken ?? ''),
      answer: String(input.captchaAnswer ?? ''),
    })
    if (!captchaResult.ok) {
      return NextResponse.json(
        { error: 'Invalid or expired CAPTCHA. Please refresh and try again.' },
        { status: 400 },
      )
    }

    const client = createClient(url, anonKey, { auth: { persistSession: false } })
    const { error } = await client.from('inquiries').insert({
      tenant_id: tenantId,
      name,
      email,
      phone: null,
      company: String(input.company ?? '').trim() || null,
      subject: String(input.subject ?? '').trim() || 'Website inquiry',
      message,
    })
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[inquiries] server insert failed.', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Submission failed.' }, { status: 502 })
  }
}
