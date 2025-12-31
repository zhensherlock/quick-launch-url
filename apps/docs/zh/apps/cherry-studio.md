---
layout: doc
---

# Cherry Studio

[Cherry Studio](https://cherry-ai.com) 是一个支持多种模型和提供商的强大 AI 客户端。**Quick Launch URL** 允许您生成深度链接，以便在 Cherry Studio 中自动配置 MCP 服务器和 AI 提供商。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 安装 MCP 服务器

::: code-group
```ts [按需加载]
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

```ts [全量导入]
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

### 安装提供商

::: code-group
```ts [按需加载]
import { installProvider } from '@quick-launch-url/core/cherry-studio'

const url = installProvider({
  id: 'new-api',
  baseUrl: 'https://open.cherryin.ai',
  apiKey: 'sk-xxxx',
})
```

```ts [全量导入]
import { cherryStudio } from '@quick-launch-url/core'

const url = cherryStudio.installProvider({
  id: 'new-api',
  baseUrl: 'https://open.cherryin.ai',
  apiKey: 'sk-xxxx',
})
```
:::