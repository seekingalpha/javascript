# eslint-config-seekingalpha-node

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESlint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) with **NPM**:

    npm install eslint@5.12.0 eslint-plugin-node@8.0.1 --save-dev

or **Yarn**:

    yarn add --dev eslint@5.12.0 eslint-plugin-node@8.0.1


Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-node --save-dev

For **Yarn**:

    yarn add --dev eslint-config-seekingalpha-node

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

