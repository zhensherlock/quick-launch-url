import { describe, expect, test } from 'vitest'
import { cursor } from '../src'

describe('cursor.ts', () => {
  test('installMCP should return a URL with base64-encoded payload', async () => {
    const url = cursor.installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
    })
    expect(url).toBe(
      'cursor://anysphere.cursor-deeplink/mcp/install?name=server-everything&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2RlbGNvbnRleHRwcm90b2NvbC9zZXJ2ZXItZXZlcnl0aGluZyJdfQ%3D%3D',
    )
  })
})
