# eslint-config-seekingalpha-typescript

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@9.31.0 typescript-eslint@8.37.0 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-typescript@latest --save-dev

## Usage

This shareable config includes all rules from following plugins:

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

Simply [use](https://eslint.org/docs/latest/extend/shareable-configs) the eslint.config.js in your project with the configuration:

```javascript
import tsConfig from 'eslint-config-seekingalpha-typescript';

export default [
  {
    plugins: {
      ...tsConfig.plugins,
    },
    rules: {
      ...tsConfig.rules,
    },
    settings: {
      ...tsConfig.settings,
    },
  },
];
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)
