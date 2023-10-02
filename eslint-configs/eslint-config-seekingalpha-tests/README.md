# eslint-config-seekingalpha-tests

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@8.50.0 eslint-plugin-jest@27.4.2 eslint-plugin-testing-library@6.0.2 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-tests --save-dev

## Usage

This configuration extended with following plugins:

- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)

Simply [extend](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) the relevant .eslintrc.js configuration in your project with `seekingalpha-tests` rules:

```javascript
{
  extends: [
    'seekingalpha-tests'
  ]
}
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)
