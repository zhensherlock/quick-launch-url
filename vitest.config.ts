import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['packages/*', 'apps/*'],
    reporters: ['default'],
    coverage: {
      provider: 'v8',
      include: ['packages/*/src/*.ts', 'apps/*/src/**/*.ts'],
      reporter: ['json', 'html'],
    },
  },
})
