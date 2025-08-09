# eslint-config-seekingalpha-tests

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@9.33.0 eslint-plugin-jest@29.0.1 eslint-plugin-testing-library@7.6.3 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-tests@latest --save-dev

## Usage

This configuration extended with following plugins:

- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)

Simply [use](https://eslint.org/docs/latest/extend/shareable-configs) the eslint.config.js in your project with the configuration:

```javascript
import testsConfig from 'eslint-config-seekingalpha-tests';

export default [
  {
    plugins: {
      ...testsConfig.plugins,
    },
    rules: {
      ...testsConfig.rules,
    },
  },
];
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)
