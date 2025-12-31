---
layout: doc
---

# Cursor

[Cursor](https://cursor.sh) 是一个 AI 驱动的代码编辑器。**Quick Launch URL** 允许您生成深度链接，以便在 Cursor 中自动配置 MCP 服务器。

## 使用

提供两种使用方式：
- 按需加载（通过子路径导入），支持 Tree Shaking，体积更小。
- 全量导入（从根包导入），使用简单，但会包含所有应用模块。

生产环境建议使用按需加载以减小体积；快速脚本或演示可选择全量导入。

### 安装 MCP 服务器

::: code-group
```ts [按需加载]
import { installMCP } from '@quick-launch-url/core/cursor'

const url = installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```

```ts [全量导入]
import { cursor } from '@quick-launch-url/core'

const url = cursor.installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```
:::
