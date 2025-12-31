---
layout: doc
---

# Cursor

[Cursor](https://cursor.sh) is an AI-powered code editor. **Quick Launch URL** allows you to generate deep links to automatically configure MCP Servers in Cursor.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos. Examples below show both.

### Install MCP Server

::: code-group
```ts [On-Demand]
import { installMCP } from '@quick-launch-url/core/cursor'

const url = installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

```ts [Full Import]
import { cursor } from '@quick-launch-url/core'

const url = cursor.installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```
:::
