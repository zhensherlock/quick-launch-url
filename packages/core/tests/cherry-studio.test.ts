import { describe, expect, test } from 'vitest'
import { cherryStudio } from '../src'

describe('cherry-studio.ts', () => {
  test('installMCP should return a URL with base64-encoded payload', async () => {
    const url = cherryStudio.installMCP({
      mcpServers: {
        everything: {
          name: 'server-everything',
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-everything'],
        },
      },
    })
    expect(url).toBe(
      'cherrystudio://mcp/install?servers=eyJtY3BTZXJ2ZXJzIjp7ImV2ZXJ5dGhpbmciOnsibmFtZSI6InNlcnZlci1ldmVyeXRoaW5nIiwidHlwZSI6InN0ZGlvIiwiY29tbWFuZCI6Im5weCIsImFyZ3MiOlsiLXkiLCJAbW9kZWxjb250ZXh0cHJvdG9jb2wvc2VydmVyLWV2ZXJ5dGhpbmciXX19fQ%3D%3D',
    )
  })
})
