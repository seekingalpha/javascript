# eslint-config-seekingalpha-node

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@9.33.0 eslint-plugin-n@17.21.3 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-node@latest --save-dev

## Usage

This shareable config includes all rules from following plugins:

- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)

Simply [use](https://eslint.org/docs/latest/extend/shareable-configs) the eslint.config.js in your project with the configuration:

```javascript
import nodeConfig from 'eslint-config-seekingalpha-node';

export default [
  {
    plugins: {
      ...nodeConfig.plugins,
    },
    rules: {
      ...nodeConfig.rules,
    },
  },
];
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)
