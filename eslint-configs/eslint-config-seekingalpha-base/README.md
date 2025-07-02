# eslint-config-seekingalpha-base

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@9.30.1 eslint-plugin-array-func@5.0.2 eslint-plugin-import@2.32.0 eslint-plugin-promise@7.2.1 eslint-plugin-unicorn@59.0.1 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-base@latest --save-dev

## Usage

This shareable config includes all ESLint rules. We also extend our configuration with following plugins:

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

Simply [use](https://eslint.org/docs/latest/extend/shareable-configs) the eslint.config.js in your project with the configuration:

```javascript
import baseConfig from 'eslint-config-seekingalpha-base';

export default [
  {
    plugins: {
      ...baseConfig.plugins,
    },
    rules: {
      ...baseConfig.rules,
    },
    settings: {
      ...baseConfig.settings,
    },
  },
];
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)
