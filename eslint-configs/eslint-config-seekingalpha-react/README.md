# eslint-config-seekingalpha-react

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESlint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) with **NPM**:

    npm install babel-eslint@10.0.2 eslint@5.16.0 eslint-plugin-flowtype@3.10.3 eslint-plugin-jest@22.6.4 eslint-plugin-jsx-a11y@6.2.1 eslint-plugin-react@7.13.0 eslint-plugin-react-hooks@1.6.0 --save-dev

or **Yarn**:

    yarn add --dev babel-eslint@10.0.2 eslint@5.16.0 eslint-plugin-flowtype@3.10.3 eslint-plugin-jest@22.6.4 eslint-plugin-jsx-a11y@6.2.1 eslint-plugin-react@7.13.0 eslint-plugin-react-hooks@1.6.0


Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-react --save-dev

For **Yarn**:

    yarn add --dev eslint-config-seekingalpha-react

## Usage

This shareable config includes all ESLint rules including ECMAScript 6 features, set of [legacy rules](https://eslint.org/docs/rules/#deprecated) and additional rules for `React` We also extend our configuration with following plugins:

* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
* [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
* [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
* [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

If you don't need configuration extended with `React` rules, check out our [base config](https://www.npmjs.com/package/eslint-config-seekingalpha-base).

Simply [extend](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) the relevant .eslintrc.js configuration in your project with `seekingalpha-react` rules:

```javascript
{
  extends: [
    'seekingalpha-react'
  ]
}
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)

