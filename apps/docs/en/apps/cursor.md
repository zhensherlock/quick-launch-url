---
layout: doc
---

<script setup lang="ts">
import { ref, computed } from 'vue';
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import { installMCP } from '@quick-launch-url/core/cursor';
import { SelectInstallationMethod } from '../../.vitepress/components';
import {
  installSTDIOMCPServerParams,
  installStreamableHTTPMCPServerParams,
  installSSEMCPServerParams,
} from '../../.vitepress/constants/cursor';

const currentMethod = ref('On-Demand');
const importPath = computed(() => currentMethod.value === 'On-Demand' ? '@quick-launch-url/core/cursor' : '@quick-launch-url/core');
</script>

# Cursor

[Cursor](https://cursor.sh) is an AI-powered code editor. **Quick Launch URL** allows you to generate deep links to automatically configure MCP Servers in Cursor.

## Usage

There are two ways to use this library:
- On-Demand import from subpaths enables tree-shaking and keeps bundles small.
- Full Import from the root package is convenient but includes all app modules.

Pick On-Demand for production builds; Full Import is fine for quick scripts or demos.

<SelectInstallationMethod v-model="currentMethod" />

### Install STDIO MCP Server

```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: 'server-everything',
  type: 'stdio',
  command: 'npx',
  args: ['-y', '@modelcontextprotocol/server-everything'],
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSTDIOMCPServerParams)" target="_self">
    Add to Cursor
  </VPLink>
</div>

### Install Streamable HTTP MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: '企查查企业信息 MCP',
  type: 'streamable_http',
  url: 'https://mcp.qcc.com/basic/stream',
  headers: {
    Authorization: 'MjMmbGnP0gwLcbYe7MCr4FCuIA9dHQ9277zoO409EGZOdL3K',
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installStreamableHTTPMCPServerParams)" target="_self">
    Add to Cursor
  </VPLink>
</div>

### Install SSE MCP Server
```ts-vue [{{currentMethod}}]
import { {{ currentMethod === 'On-Demand' ? 'installMCP' : 'cursor' }} } from '{{ importPath }}'

const url = {{currentMethod === 'On-Demand' ? '' : 'cursor.'}}installMCP({
  name: '企查查风险信息 MCP',
  type: 'sse',
  url: 'https://mcp.qcc.com/basic/sse',
  headers: {
    Authorization: 'MjMmbGnP0gwLcbYe7MCr4FCuIA9dHQ9277zoO409EGZOdL3K',
  },
})
```
<div class="flex justify-center">
  <VPLink :href="installMCP(installSSEMCPServerParams)" target="_self">
    Add to Cursor
  </VPLink>
</div>
