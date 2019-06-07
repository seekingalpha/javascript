# eslint-config-seekingalpha-base

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESlint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) with **NPM**:

    npm install eslint@5.16.0 eslint-plugin-array-func@3.1.3 eslint-plugin-import@2.17.3 eslint-plugin-jsdoc@7.2.3 eslint-plugin-no-use-extend-native@0.4.0 eslint-plugin-promise@4.1.1 eslint-plugin-unicorn@9.0.0 --save-dev

or **Yarn**:

    yarn add --dev eslint@5.16.0 eslint-plugin-array-func@3.1.3 eslint-plugin-import@2.17.3 eslint-plugin-jsdoc@7.2.3 eslint-plugin-no-use-extend-native@0.4.0 eslint-plugin-promise@4.1.1 eslint-plugin-unicorn@9.0.0


Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-base --save-dev

For **Yarn**:

    yarn add --dev eslint-config-seekingalpha-base

## Usage

This shareable config includes all ESLint rules including ECMAScript 6 features and set of [legacy rules](https://eslint.org/docs/rules/#deprecated). We also extend our configuration with following plugins:

* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
* [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
* [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
* [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
* [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

We expose three configurations:

* `seekingalpha-base` - exports all avaliable ESLint [rules](https://eslint.org/docs/rules/) and all rules of plugins above.
* `seekingalpha-base/browser` - exports only browser related rules for ESLint and mentioned plugins. It also sets `browser` as [default environment](https://eslint.org/docs/user-guide/configuring#specifying-environments).
* `seekingalpha-base/node` - exports only Node.js related rules for ESLint and mentioned plugins. It also sets `node` as [default environment](https://eslint.org/docs/user-guide/configuring#specifying-environments).


Simply [extend](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) the .eslintrc.js in your project with relevant configuration:

```javascript
// for seekingalpha-base
{
  extends: [
    'seekingalpha-base'
  ]
}
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)

