import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import pkg from '../../../packages/core/package.json' with { type: 'json' }

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Quick Launch URL',
  description: 'One-click Launch URL Generator for Cherry Studio and Cursor',
  rewrites: {
    'en/:rest*': ':rest*',
    'en/index.md': 'index.md',
  },
  base: '/quick-launch-url/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/quick-launch-url/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/quick-launch-url/logo.svg' }],
  ],
  locales: {
    root: { label: 'English', lang: 'en-US', dir: 'ltr' },
    zh: { label: '简体中文', lang: 'zh-Hans', dir: 'ltr' },
  },
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/zhensherlock/quick-launch-url' }],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/zhensherlock/quick-launch-url/blob/main/packages/core/CHANGELOG.md',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Quick Launch URL?', link: '/guide/what-is-it' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Applications',
        items: [
          { text: 'Cherry Studio', link: '/apps/cherry-studio' },
          { text: 'Cursor', link: '/apps/cursor' },
        ],
      },
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'V6CF28P0PS',
        apiKey: '692752b7b3c6f794997d8ae22aed79fa',
        indexName: 'quick-launch-url',
      },
    },
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    server: {
      open: true,
    },
    plugins: [
      llmstxt({
        ignoreFiles: ['en/index.md', 'zh/index.md'],
        description: 'One-click Launch URL Generator for Cherry Studio and Cursor',
        sidebar: [
          {
            text: 'Introduction',
            base: '',
            items: [
              { text: 'What is Quick Launch URL?', link: '/en/guide/what-is-it' },
              { text: 'Getting Started', link: '/en/guide/getting-started' },
            ],
          },
          {
            text: 'Applications',
            base: '',
            items: [
              { text: 'Cherry Studio', link: '/en/apps/cherry-studio' },
              { text: 'Cursor', link: '/en/apps/cursor' },
            ],
          },
          {
            text: '简介',
            base: '',
            items: [
              { text: '什么是 Quick Launch URL？', link: '/zh/guide/what-is-it' },
              { text: '快速开始', link: '/zh/guide/getting-started' },
            ],
          },
          {
            text: '应用程序',
            base: '',
            items: [
              { text: 'Cherry Studio', link: '/zh/apps/cherry-studio' },
              { text: 'Cursor', link: '/zh/apps/cursor' },
            ],
          },
        ],
        details: `\
- 🚀 One-click Launch
- 🍒 Cherry Studio Support
- 🖱️ Cursor Support
- 🛡️ Type Safe
- 🌍 Universal Compatible
`,
      }),
      groupIconVitePlugin({
        customIcon: {
          'cursor': localIconLoader(import.meta.url, '../assets/cursor.svg'),
          'cherry studio': localIconLoader(import.meta.url, '../assets/cherry-studio.svg'),
        }
      }),
    ],
  },
})
