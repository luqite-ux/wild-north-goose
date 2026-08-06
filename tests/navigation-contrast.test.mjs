import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const navigation = readFileSync(new URL('../components/navigation.tsx', import.meta.url), 'utf8')

test('navigation uses complete dark and light visual states', () => {
  assert.match(navigation, /topState/)
  assert.match(navigation, /bg-\[#10261a\]\/80/)
  assert.match(navigation, /bg-background\/95/)
  assert.match(navigation, /text-white/)
  assert.match(navigation, /text-foreground/)
  assert.doesNotMatch(navigation, /topState[^\n]*\?[^\n]*bg-transparent/)
})

test('mobile menu always uses an opaque readable light theme', () => {
  assert.match(navigation, /bg-background shadow-xl/)
  assert.match(navigation, /border-border/)
})

test('navigation controls expose visible keyboard focus styles', () => {
  assert.match(navigation, /focus-visible:ring-2/)
  assert.match(navigation, /focus-visible:ring-offset-2/)
})
