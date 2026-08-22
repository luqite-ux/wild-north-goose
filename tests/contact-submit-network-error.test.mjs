import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import vm from 'node:vm'

import ts from 'typescript'

const root = path.resolve(import.meta.dirname, '..')

function loadContactPage(fetchImpl) {
  const source = fs.readFileSync(path.join(root, 'app/contact/page.tsx'), 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: 'app/contact/page.tsx',
  }).outputText

  const states = []
  const useState = (initialValue) => {
    const state = { value: initialValue, history: [initialValue] }
    states.push(state)
    return [
      state.value,
      (nextValue) => {
        state.value = typeof nextValue === 'function' ? nextValue(state.value) : nextValue
        state.history.push(state.value)
      },
    ]
  }
  const jsx = (type, props, key) => ({ type, props: props ?? {}, key })
  const module = { exports: {} }
  const require = (specifier) => {
    if (specifier === 'react') return { useState }
    if (specifier === 'react/jsx-runtime') return { Fragment: 'Fragment', jsx, jsxs: jsx }
    if (specifier === '@/components/navigation') return { __esModule: true, default: 'Navigation' }
    if (specifier === '@/components/footer') return { __esModule: true, default: 'Footer' }
    if (specifier === '@/components/ui/button') return { Button: 'Button' }
    if (specifier === '@/components/inquiry-captcha-field') return { InquiryCaptchaField: 'InquiryCaptchaField' }
    if (specifier === 'lucide-react') return { Mail: 'Mail', MapPin: 'MapPin' }
    throw new Error(`Unexpected test import: ${specifier}`)
  }
  const sandbox = {
    exports: module.exports,
    fetch: fetchImpl,
    FormData: class {
      get(name) {
        return {
          captchaScope: 'contact_form_scope_1234567890',
          captchaToken: 'test-token',
          captchaAnswer: 'ABCD',
        }[name] ?? null
      }
    },
    module,
    require,
  }
  vm.runInNewContext(compiled, sandbox, { filename: 'app/contact/page.js' })
  return { ContactPage: module.exports.default, states }
}

function findElement(node, type) {
  if (Array.isArray(node)) {
    for (const child of node) {
      const match = findElement(child, type)
      if (match) return match
    }
    return null
  }
  if (!node || typeof node !== 'object') return null
  if (node.type === type) return node
  return findElement(node.props?.children, type)
}

test('a rejected inquiry request reports an error and refreshes CAPTCHA', async () => {
  const { ContactPage, states } = loadContactPage(async () => {
    throw new Error('network unavailable')
  })
  const form = findElement(ContactPage(), 'form')
  assert.ok(form, 'contact form should render')

  await assert.doesNotReject(() => form.props.onSubmit({
    currentTarget: {},
    preventDefault() {},
  }))

  assert.deepEqual(states[1].history, ['idle', 'submitting', 'error'])
  assert.equal(states[2].value, 1)
})
