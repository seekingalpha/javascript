# eslint-config-seekingalpha-node

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@7.16.0 eslint-plugin-node@11.1.0 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-node --save-dev

## Usage

This shareable config includes all rules from following plugins:

* [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)

Simply [extend](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) the relevant .eslintrc.js configuration in your project with `seekingalpha-node` rules:

```javascript
{
  extends: [
    'seekingalpha-node'
  ]
}
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)

