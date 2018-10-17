# Change Log

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