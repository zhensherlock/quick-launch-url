<script setup lang="ts">
import { installMCP, installProvider } from '@quick-launch-url/core/cherry-studio'

const urls = [
  {
    label: 'Install Multiple MCP Servers',
    value: installMCP({
      mcpServers: {
        'server-everything': {
          type: 'stdio',
          command: 'npx',
          args: ['-y', '@modelcontextprotocol/server-everything'],
          provider: 'Claude',
          providerUrl: 'https://modelcontextprotocol.io/',
        },
        'qcc-company-basic-stream': {
          name: '企查查企业信息 MCP',
          description:
            '企业信息 MCP 提供全面的企业画像分析与企业信息洞察服务，助您快速验证企业  真实性、评估其稳定性和发展轨迹，为您的商业行动提供坚实的数据支撑。',
          type: 'streamableHttp',
          baseUrl: 'https://mcp.qcc.com/basic/stream',
          headers: {
            Authorization: 'M0jtlHI3ASqdMXkC3pBcibrFwmVxsD1QMreZxcSM1LbDNGPE',
          },
          provider: 'QCC',
          providerUrl: 'https://openapi.qcc.com/',
          reference: 'https://openapi.qcc.com/mcpTools?service=basic',
          logoUrl: 'https://openapi.qcc.com/favicon.ico',
          tags: ['company-basic', '企业信息'],
          timeout: 30,
        },
        'qcc-company-risk-sse': {
          name: '企查查风险信息 MCP',
          description:
            '风险信息 MCP 提供全面的企业风险透视扫描能力，可识别企业在司法、行政、经营等方面的信用与合规隐患，助您精准评估合作对象的可靠性，有效规避商业陷阱与连带风险。',
          type: 'sse',
          baseUrl: 'https://mcp.qcc.com/basic/sse',
          headers: {
            Authorization: 'M0jtlHI3ASqdMXkC3pBcibrFwmVxsD1QMreZxcSM1LbDNGPE',
          },
          provider: 'QCC',
          providerUrl: 'https://openapi.qcc.com/',
          reference: 'https://openapi.qcc.com/mcpTools?service=risk',
          logoUrl: 'https://openapi.qcc.com/favicon.ico',
          tags: ['company-risk', '风险信息'],
          timeout: 30,
        },
      },
    }),
  },
  {
    label: 'Install STDIO MCP Server',
    value: installMCP({
      name: 'server-everything',
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-everything'],
      registryUrl: 'https://registry.npmmirror.com',
      provider: 'Claude',
      providerUrl: 'https://modelcontextprotocol.io/',
    }),
  },
  {
    label: 'Install Streamable HTTP MCP Server',
    value: installMCP({
      name: '企查查企业信息 MCP',
      description:
        '企业信息 MCP 提供全面的企业画像分析与企业信息洞察服务，助您快速验证企业真实性、评估其稳定性和发展轨迹，为您的商业行动提供坚实的数据支撑。',
      type: 'streamableHttp',
      baseUrl: 'https://mcp.qcc.com/basic/stream',
      headers: {
        Authorization: 'M0jtlHI3ASqdMXkC3pBcibrFwmVxsD1QMreZxcSM1LbDNGPE',
      },
      provider: 'QCC',
      providerUrl: 'https://openapi.qcc.com/',
      reference: 'https://openapi.qcc.com/mcpTools?service=basic',
      logoUrl: 'https://openapi.qcc.com/favicon.ico',
      tags: ['company-basic', '企业信息'],
      timeout: 30,
    }),
  },
  {
    label: 'Install SSE MCP Server',
    value: installMCP({
      name: '企查查风险信息 MCP',
      description:
        '风险信息 MCP 提供全面的企业风险透视扫描能力，可识别企业在司法、行政、经营等方面的信用与合规隐患，助您精准评估合作对象的可靠性，有效规避商业陷阱与连带风险。',
      type: 'sse',
      baseUrl: 'https://mcp.qcc.com/basic/sse',
      headers: {
        Authorization: 'M0jtlHI3ASqdMXkC3pBcibrFwmVxsD1QMreZxcSM1LbDNGPE',
      },
      provider: 'QCC',
      providerUrl: 'https://openapi.qcc.com/',
      reference: 'https://openapi.qcc.com/mcpTools?service=risk',
      logoUrl: 'https://openapi.qcc.com/favicon.ico',
      tags: ['company-risk', '风险信息'],
      timeout: 30,
    }),
  },
  {
    label: 'Install Provider',
    value: installProvider({
      id: 'new-api',
      baseUrl: 'https://open.cherryin.ai',
      apiKey: 'sk-xxxx',
    }),
  },
]
</script>

<template>
  <details open class="group rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
    <summary
      class="flex cursor-pointer list-none items-center justify-between rounded-lg px-4 py-3 font-medium hover:bg-zinc-50 [&::-webkit-details-marker]:hidden group-open:rounded-b-none"
    >
      Cherry Studio
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
