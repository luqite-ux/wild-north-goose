import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')

test('admin proxy uses the three standard rewrites', () => {
  const config = read('next.config.mjs')
  for (const route of ['/admin', '/admin/:path*', '/api/admin/:path*']) assert.ok(config.includes(`source: '${route}'`))
})

test('admin login uses native 303 response and exact tenant cookies', () => {
  const route = read('app/api/auth/login/route.ts')
  assert.match(route, /eq\('tenant_id', tenantId\)/)
  assert.match(route, /bcrypt\.compare/)
  assert.match(route, /NextResponse\.redirect\(new URL\('\/admin'/)
  assert.match(route, /, 303\)/)
  assert.match(route, /hq_tenant_id/)
  assert.equal(fs.existsSync(path.join(root, 'app/admin/login/actions.ts')), false)
  assert.match(read('lib/admin-session.ts'), /hq_admin_session/)
})

test('middleware protects admin while preserving login and logout', () => {
  const middleware = read('middleware.ts')
  assert.match(middleware, /pathname\.startsWith\('\/admin\/login'\)/)
  assert.match(middleware, /pathname\.startsWith\('\/admin\/logout'\)/)
  assert.match(middleware, /SESSION_COOKIE/)
})
