export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim() || process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() || process.env.VERCEL_URL?.trim()
  if (!configured) return 'https://wildnorthgooseoutdoor.com'
  return configured.startsWith('http') ? configured.replace(/\/$/, '') : `https://${configured.replace(/\/$/, '')}`
}
