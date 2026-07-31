import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let publicClient: SupabaseClient | null | undefined

export function getSupabaseClient() {
  if (publicClient !== undefined) return publicClient
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  publicClient = url && anonKey
    ? createClient(url, anonKey, { auth: { persistSession: false, autoRefreshToken: false } })
    : null
  return publicClient
}

export function getTenantId() {
  return process.env.NEXT_PUBLIC_TENANT_ID || ''
}
