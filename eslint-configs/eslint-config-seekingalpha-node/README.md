# eslint-config-seekingalpha-node

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@8.57.0 eslint-plugin-n@17.14.0 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-node --save-dev

## Usage

This shareable config includes all rules from following plugins:

- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)

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
