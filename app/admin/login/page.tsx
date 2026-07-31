'use client'

import Image from 'next/image'
import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function LoginForm() {
  const params = useSearchParams()
  const [pending, setPending] = useState(false)
  const reason = params.get('reason')
  const error = params.get('error')
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50 p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-6 text-center"><Image src="/logo.png" alt="Wild North Goose" width={88} height={88} className="mx-auto rounded-full" /><h1 className="mt-4 text-2xl font-bold">苏州北漠雁服饰有限公司</h1><p className="mt-2 text-sm text-slate-600">网站管理后台登录</p></div>
        {reason === 'unauthorized' && <p className="mb-4 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800">请先登录后再访问管理后台</p>}
        <form action="/api/auth/login" method="post" className="space-y-4" onSubmit={() => setPending(true)}>
          {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
          <label className="block text-sm font-medium">邮箱<input name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100" /></label>
          <label className="block text-sm font-medium">密码<input name="password" type="password" autoComplete="current-password" required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100" /></label>
          <button type="submit" disabled={pending} className="w-full rounded-lg bg-emerald-800 px-4 py-2.5 font-medium text-white hover:bg-emerald-900 disabled:opacity-60">{pending ? '登录中…' : '登录'}</button>
        </form>
      </div>
    </main>
  )
}

export default function AdminLoginPage() {
  return <Suspense fallback={<div className="flex min-h-screen items-center justify-center">加载中…</div>}><LoginForm /></Suspense>
}
