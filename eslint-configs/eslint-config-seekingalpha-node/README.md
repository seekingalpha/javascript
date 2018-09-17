# eslint-config-seekingalpha-node

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESlint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) with **NPM**:

    npm install eslint@"^5.6.0" babel-eslint@"^8.2.6" eslint-plugin-array-func@"^3.0.0" eslint-plugin-import@"^2.14.0" eslint-plugin-jsdoc@"^3.8.0" eslint-plugin-no-use-extend-native@"^0.3.12" eslint-plugin-node@"^7.0.1" eslint-plugin-promise@"^4.0.1" eslint-plugin-unicorn@"^5.0.0" --save-dev

or **Yarn**:

    yarn add --dev eslint@^5.6.0 babel-eslint@^8.2.6 eslint-plugin-array-func@^3.0.0 eslint-plugin-import@^2.14.0 eslint-plugin-jsdoc@^3.8.0 eslint-plugin-no-use-extend-native@^0.3.12 eslint-plugin-node@^7.0.1 eslint-plugin-promise@^4.0.1 eslint-plugin-unicorn@^5.0.0

    
Install SeekingAlpha shareable ESLint:
    
    npm install eslint-config-seekingalpha-node --save-dev
    
For **Yarn**:

    yarn add --dev eslint-config-seekingalpha-node

## Usage

This shareable config includes all ESLint rules including ECMAScript 6 features, set of [legacy rules](https://eslint.org/docs/rules/#deprecated) and additional rules for `node` We also extend our configuration with following plugins:

* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
* [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
* [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
* [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
* [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)

If you don't need configuration extended with `node` rules, check out our [base config](https://www.npmjs.com/package/eslint-config-seekingalpha-base).

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

