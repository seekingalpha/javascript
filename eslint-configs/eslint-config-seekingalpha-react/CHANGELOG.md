# Change Log

## 1.4.0 - 2018-12-18
 - [deps] update `eslint-config-seekingalpha-base` to version 1.6.0
 - [new] `flowtype/require-compound-type-alias` rule error with `never` option
 - [new] `jest/consistent-test-it` rule error
 - [new] `jest/expect-expect` rule error
 - [new] `jest/no-jasmine-globals` rule error
 - [new] `jest/no-jest-import` rule error
 - [new] `jest/no-large-snapshots` rule error with `maxSize: 50` option
 - [new] `jest/no-test-prefixes` rule error
 - [new] `jest/no-test-return-statement` rule error
 - [new] `jest/prefer-strict-equal` rule error
 - [new] `jest/prefer-to-be-null` rule error
 - [new] `jest/prefer-to-be-undefined` rule error
 - [new] `jest/valid-describe` rule error
 - [new] `jest/valid-expect` rule error
 - [new] `jest/valid-expect-in-promise` rule error
 - [new] `jsx-a11y/label-has-associated-control` rule error

## 1.3.0 - 2018-12-11
 - [deps] update `eslint-config-seekingalpha-base` to version 1.5.1
 - [deps] update `eslint` to version 5.10.0
 - [deps] update `eslint-plugin-array-func` to version 3.1.0
 - [deps] update `eslint-plugin-jsdoc` to version 3.14.0
 - [deps] update `eslint-plugin-node` to version 8.0.0
 - [deps] update `eslint-plugin-unicorn` to version 6.0.1
 - [deps] update `babel-eslint` to version 10.0.1
 - [deps] update `eslint-plugin-chai-expect` to version 2.0.1
 - [deps] update `eslint-plugin-flowtype` to version 3.2.0
 - [deps] update `eslint-plugin-jsx-a11y` to version 6.1.1
 - [deps] update `eslint-plugin-jest` to version 22.1.2
 - [deps] fix `peerDependencies` version
 - [docs] updates `README.md` installation guide
 - [new] `jest/require-tothrow-message` rule error
 - [new] `jest/no-alias-methods` rule error
 - [new] `jest/prefer-to-contain` rule error
 - [new] `jest/no-test-callback` rule error
 - [new] `jest/prefer-spy-on` rule error
 - [new] `jest/no-truthy-falsy` rule error

## 1.2.6 - 2018-11-20
 - [deps] update `eslint-config-seekingalpha-base` to version 1.3.2

## 1.2.5 - 2018-11-20
 - wrong update

## 1.2.4 - 2018-11-20
 - [patch: loosen rules] disable `flowtype/sort-keys`
 - [patch: loosen rules] disable `react/no-danger`

## 1.2.3 - 2018-10-17
 - [patch] allowRequiredDefaults according to comment https://github.com/facebook/flow/issues/1660#issuecomment-386619834

## 1.2.2 - 2018-10-16
 - [deps] update `eslint-config-seekingalpha-base` to version 1.3.1

## 1.2.1 - 2018-09-18
 - [deps] update `eslint-config-seekingalpha-base` to version 1.3.0

## 1.2.0 - 2018-09-15
 - [deps] update `eslint` to version 5.6.0
 - [deps] update `eslint-plugin-jsdoc` to version 3.8.0
 - [deps] update `eslint-plugin-promise` to version 4.0.1
 - [deps] update `eslint-plugin-unicorn` to version 6.0.1
 - [docs] update `CHANGELOG.md` including previous releases
 - [docs] updates `README.md` installation guide
 - [breaking] make `eslint-config-seekingalpha-base` pkg direct dependency

## 1.1.5 - 2018-09-06

 - [breaking] make `eslint-config-seekingalpha-base` peerDependency

## 1.1.4 - 2018-08-28

 - [breaking] update `react/jsx-closing-bracket-location` rule, set `selfClosing: 'tag-aligned'` and `nonEmpty: 'tag-aligned'` options
 - [minor] loosen `react/forbid-component-props` rule allowing `className` for `Button`, `Icon`, and `Link` components

## 1.1.3 - 2018-08-27

 - [new] integrate `eslint-plugin-flowtype`

## 1.1.2 - 2018-08-22

 - [doc] README.md language fixes

## 1.1.1 - 2018-08-17

 - [doc] fix npm installation guide

## 1.1.0 - 2018-08-17

 - [deps] update `eslint-config-seekingalpha-base` dependency to `^1.1.1`
 - [deps] update `eslint-plugin-import` dependency to `^2.14.0`

## 1.0.4 - 2018-08-15

 - [fix] `react/jsx-one-expression-per-line` allow only literals

## 1.0.3 - 2018-08-15

 - [deps] update `eslint-config-seekingalpha-base` dependency to `^1.0.4`
 - [deps] update `eslint-plugin-react` dependency to `^7.11.1`
 - [patch: loosen rules] `react/prop-types` rule now skips undeclared propTypes validation
 - [patch: loosen rules] `react/jsx-one-expression-per-line` rule allows single-child one line expressions
 - [fix] `react/forbid-dom-props` reenable 'type' property
 - [fix] added settings section for `eslint-plugin-react` with React ver. 16.4.1

## 1.0.2 - 2018-08-15

 - [fix] Remove deprecated [`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md) rule

## 1.0.1 - 2018-08-15

 - Fix package installation guide using NPM
 - Set direct dependency on eslint-config-seekingalpha-base

## 1.0.0 - 2018-08-14

 - Initial commit