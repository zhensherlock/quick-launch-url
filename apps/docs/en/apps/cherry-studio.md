---
layout: doc
---

# Cherry Studio

[Cherry Studio](https://cherry-ai.com) is a powerful AI client that supports multiple models and providers. **Quick Launch URL** allows you to generate deep links to automatically configure MCP Servers and AI Providers in Cherry Studio.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos. Examples below show both.

### Install MCP Server

::: code-group
```ts [On-Demand]
import { installMCP } from '@quick-launch-url/core/cherry-studio'

const url = installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
  registryUrl: 'https://registry.npmmirror.com',
  provider: 'Anthropic',
  providerUrl: 'https://modelcontextprotocol.io/',
  logoUrl: 'https://avatars.githubusercontent.com/u/182288589?s=200&v=4',
})
```

```ts [Full Import]
import { cherryStudio } from '@quick-launch-url/core'

const url = cherryStudio.installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
  registryUrl: 'https://registry.npmmirror.com',
  provider: 'Anthropic',
  providerUrl: 'https://modelcontextprotocol.io/',
  logoUrl: 'https://avatars.githubusercontent.com/u/182288589?s=200&v=4',
})
```
:::

### Install Provider

::: code-group
```ts [On-Demand]
import { installProvider } from '@quick-launch-url/core/cherry-studio'

const url = installProvider({
  id: 'new-api',
  baseUrl: 'https://open.cherryin.ai',
  apiKey: 'sk-xxxx',
})
```

```ts [Full Import]
import { cherryStudio } from '@quick-launch-url/core'

const url = cherryStudio.installProvider({
  id: 'new-api',
  baseUrl: 'https://open.cherryin.ai',
  apiKey: 'sk-xxxx',
})
```
:::
