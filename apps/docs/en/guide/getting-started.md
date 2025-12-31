---
layout: doc
---

# Getting Started

## Installation

Install `@quick-launch-url/core` using your preferred package manager:

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

## Usage

### Tree Shaking (Recommended)

To minimize bundle size, import specific modules directly:

::: code-group
```typescript [cherry studio]
// Only imports Cherry Studio related code
import { installMCP, installProvider } from '@quick-launch-url/core/cherry-studio'
```

```typescript [cursor]
// Only imports Cursor related code
import { installMCP } from '@quick-launch-url/core/cursor'
```
:::

### Full Import

You can also import everything from the root package, but this will include all application modules and does not support tree-shaking:

```typescript
import { cherryStudio, cursor } from '@quick-launch-url/core'
```

For detailed usage instructions for each application, please refer to their respective guides:

- [Cherry Studio](/en/apps/cherry-studio)
- [Cursor](/en/apps/cursor)
