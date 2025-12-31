---
layout: doc
---

# 入门指南

## 安装

使用您喜欢的包管理器安装 `@quick-launch-url/core`：

::: code-group
```sh [npm]
$ npm install @quick-launch-url/core
```

```sh [pnpm]
$ pnpm add @quick-launch-url/core
```

```sh [yarn]
$ yarn add @quick-launch-url/core
```

```bash [bun]
$ bun add @quick-launch-url/core
```
:::

## 使用

### 按需加载（推荐）

为了减小打包体积，建议直接导入特定模块：

::: code-group
```typescript [cherry studio]
// 仅导入 Cherry Studio 相关代码
import { installMCP, installProvider } from '@quick-launch-url/core/cherry-studio'
```

```typescript [cursor]
// 仅导入 Cursor 相关代码
import { installMCP } from '@quick-launch-url/core/cursor'
```
:::

### 全量导入

您也可以从根包导入所有内容，但这将包含所有应用程序模块，并且不支持 Tree Shaking：

```typescript
import { cherryStudio, cursor } from '@quick-launch-url/core'
```

有关每个应用程序的详细使用说明，请参阅各自的指南：

- [Cherry Studio](/zh/apps/cherry-studio)
- [Cursor](/zh/apps/cursor)
