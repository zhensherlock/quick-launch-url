import { describe, expect, test } from 'vitest'
import { encodeUrlPayload } from '../src'

describe('index.ts', () => {
  test('encodeUrlPayload should return a base64-encoded string', async () => {
    const payload = { key: 'value', 键: '值' }
    const encoded = encodeUrlPayload(payload)
    expect(encoded).toBe('eyJrZXkiOiJ2YWx1ZSIsIumUriI6IuWAvCJ9')
  })

  test('encodeUrlPayload should return a safe base64-encoded string', async () => {
    const payload = { key: 'value', 键: '值' }
    const encoded = encodeUrlPayload(payload, { useSafeEncoding: true })
    expect(encoded).toBe('eyJrZXkiOiJ2YWx1ZSIsIumUriI6IuWAvCJ9')
  })
})
