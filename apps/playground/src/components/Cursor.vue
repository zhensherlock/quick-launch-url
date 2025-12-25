<script setup lang="ts">
import { installMCP } from '@quick-launch-url/core/cursor'

const urls = [
  {
    label: 'Install STDIO MCP Server',
    value: installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
    }),
  },
  {
    label: 'Install Streamable HTTP MCP Server',
    value: installMCP({
      name: '企查查企业信息 MCP',
      type: 'streamable_http',
      url: 'https://mcp.qcc.com/basic/stream',
      headers: {
        Authorization: 'MjMmbGnP0gwLcbYe7MCr4FCuIA9dHQ9277zoO409EGZOdL3K',
      },
    }),
  },
  {
    label: 'Install SSE MCP Server',
    value: installMCP({
      name: '企查查风险信息 MCP',
      type: 'sse',
      url: 'https://mcp.qcc.com/basic/sse',
      headers: {
        Authorization: 'MjMmbGnP0gwLcbYe7MCr4FCuIA9dHQ9277zoO409EGZOdL3K',
      },
    }),
  },
]
</script>

<template>
  <details open class="group rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
    <summary
      class="flex cursor-pointer list-none items-center justify-between rounded-lg px-4 py-3 font-medium hover:bg-zinc-50 [&::-webkit-details-marker]:hidden group-open:rounded-b-none"
    >
      Cursor
      <span class="ml-2 inline-block rotate-0 transition-transform duration-200 group-open:rotate-90">▶</span>
    </summary>
    <section class="space-y-2 border-t border-zinc-100 px-4 py-3">
      <a
        v-for="url in urls"
        :key="url.label"
        :href="url.value"
        class="block rounded-md px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 hover:text-blue-700 active:bg-blue-100"
      >
        {{ url.label }}
      </a>
    </section>
  </details>
</template>

<style scoped></style>
