# eslint-config-seekingalpha-react

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESlint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) with **NPM**:

    npm install eslint@"^5.3.0" babel-eslint@"^8.2.6" eslint-plugin-array-func@"^3.0.0" eslint-plugin-import@"^2.14.0" eslint-plugin-jsdoc@"^3.7.1" eslint-plugin-no-use-extend-native@"^0.3.12" eslint-plugin-promise@"^3.8.0" eslint-plugin-unicorn@"^5.0.0" eslint-plugin-react@"^7.11.1" eslint-plugin-jsx-a11y@"^6.1.1" --save-dev

or **Yarn**:

    yarn add --dev slint@^5.3.0 babel-eslint@^8.2.6 eslint-plugin-array-func@^3.0.0 eslint-plugin-import@^2.14.0 eslint-plugin-jsdoc@^3.7.1 eslint-plugin-no-use-extend-native@^0.3.12 eslint-plugin-promise@^3.8.0 eslint-plugin-unicorn@^5.0.0 eslint-plugin-react@^7.10.0 eslint-plugin-jsx-a11y@^6.1.1

    
Install SeekingAlpha shareable ESLint:
    
    npm install eslint-config-seekingalpha-react --save-dev
    
For **Yarn**:

    yarn add --dev eslint-config-seekingalpha-react

## Usage

This shareable config includes all ESLint rules including ECMAScript 6 features, set of [legacy rules](https://eslint.org/docs/rules/#deprecated) and additional rules for `React` We also extend our configuration with following plugins:

* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
* [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
* [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
* [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
* [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
* [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)

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

