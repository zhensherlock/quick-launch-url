<p align="center">
  <a href="https://zhensherlock.github.io/quick-launch-url/" target="_blank" rel="noopener noreferrer">
    <img width="300" src="https://zhensherlock.github.io/quick-launch-url/logo.svg" alt="quick-launch-url">
  </a>
</p>

# Quick Launch URL

One-click launch URL generator for protocol-based apps.

[![][npm-release-shield]][npm-release-link]
[![][codecov-shield]][codecov-link]
[![][github-release-date-shield]][github-release-date-link]
[![][github-action-build-shield]][github-action-build-link]
[![][github-license-shield]][github-license-link]

## Features

- 🛡️️ Type-Safe
- 🌍 Multi-App Ready
- 🌿 On-Demand / Tree-shakable
- 🔐 Secure Encoding
- ⚙️ Zero Runtime Dependencies
- 📦 ESM First

## Installation

```bash
npm install @quick-launch-url/core
```

or

```bash
yarn install @quick-launch-url/core
```

or

```bash
pnpm install @quick-launch-url/core
```

## Usage

### On-Demand Import (Recommended)

```ts
// Cherry Studio
import { installMCP, installProvider } from '@quick-launch-url/core/cherry-studio'

// Cursor
import { installMCP as installCursorMCP } from '@quick-launch-url/core/cursor'
```

### Full Import

```ts
import { cherryStudio, cursor } from '@quick-launch-url/core'
```

## Docs

Full guides and examples: https://zhensherlock.github.io/quick-launch-url/

## Contributing

Feel free to dive in! [Open an issue](https://github.com/zhensherlock/quick-launch-url/issues/new/choose) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

### Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/zhensherlock/quick-launch-url/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zhensherlock/quick-launch-url" />
</a>

## License

[MIT](LICENSE) © MichaelSun

[npm-release-link]: https://www.npmjs.com/package/@quick-launch-url/core
[npm-release-shield]: https://img.shields.io/npm/v/@quick-launch-url/core?color=1677FF&labelColor=black&logo=npm&logoColor=white&style=flat-square
[codecov-link]: https://coveralls.io/github/zhensherlock/quick-launch-url?branch=main
[codecov-shield]: https://img.shields.io/coverallsCoverage/github/zhensherlock/quick-launch-url?color=1677FF&labelColor=black&style=flat-square&logo=codecov&logoColor=white
[github-release-date-link]: https://github.com/zhensherlock/quick-launch-url/releases
[github-release-date-shield]: https://img.shields.io/github/release-date/zhensherlock/quick-launch-url?color=1677FF&labelColor=black&style=flat-square
[github-action-build-link]: https://github.com/zhensherlock/quick-launch-url/actions/workflows/build.yml
[github-action-build-shield]: https://img.shields.io/github/actions/workflow/status/zhensherlock/quick-launch-url/build.yml?branch=main&color=1677FF&label=build&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-license-link]: https://github.com/zhensherlock/quick-launch-url/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/zhensherlock/quick-launch-url?color=1677FF&labelColor=black&style=flat-square
