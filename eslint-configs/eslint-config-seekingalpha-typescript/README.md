# eslint-config-seekingalpha-typescript

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@8.57.0 @typescript-eslint/eslint-plugin@8.5.0 @typescript-eslint/parser@8.5.0 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-typescript --save-dev

## Usage

This shareable config includes all rules from following plugins:

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

Simply [extend](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) the relevant .eslintrc.js configuration in your project with `eslint-config-seekingalpha-typescript` rules:

```javascript
{
  extends: [
    'eslint-config-seekingalpha-typescript'
  ]
}
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)
