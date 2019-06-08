# Change Log

## 2.3.1 - 2019-06-08
 - [minor] disable `import/no-unused-modules` rule

## 2.3.0 - 2019-06-07
 - [deps] update `eslint-plugin-import` to version 2.17.3
 - [deps] update `eslint-plugin-jsdoc` to version 7.2.3
 - [deps] update `eslint-plugin-unicorn` to version 9.0.0
 - [beaking] enable `import/no-unused-modules` rule
 - [beaking] enable `jsdoc/implements-on-classes` rule
 - [beaking] enable `jsdoc/match-description` rule
 - [beaking] enable `jsdoc/no-types` rule
 - [beaking] enable `jsdoc/require-jsdoc` rule
 - [beaking] enable `unicorn/prefer-event-key` rule
 - [beaking] enable `unicorn/prefer-flat-map` rule

## 2.2.0 - 2019-04-24
 - [deps] update `eslint-plugin-import` to version 2.17.2

## 2.1.1 - 2019-04-11
 - [beaking] disable `unicorn/prevent-abbreviations` rule

## 2.1.0 - 2019-04-11
 - [deps] update `eslint` to version 5.16.0
 - [deps] update `eslint-plugin-jsdoc` to version 4.8.3
 - [deps] update `eslint-plugin-promise` to version 4.1.1
 - [deps] update `eslint-plugin-unicorn` to version 8.0.2
 - [beaking] enable `jsdoc/check-alignment` rule
 - [beaking] enable `jsdoc/check-indentation` rule
 - [beaking] enable `jsdoc/check-syntax` rule
 - [beaking] enable `unicorn/no-for-loop` rule
 - [beaking] enable `unicorn/no-zero-fractions` rule
 - [beaking] enable `unicorn/prefer-includes` rule
 - [beaking] enable `unicorn/prefer-node-remove` rule
 - [beaking] enable `unicorn/prefer-text-content` rule
 - [beaking] enable `unicorn/prevent-abbreviations` rule
 - [docs] updates `README.md` installation guide

## 2.0.0 - 2019-03-10
 - [deps] update `eslint` to version 5.15.1
 - [deps] update `eslint-plugin-array-func` to version 3.1.3
 - [deps] update `eslint-plugin-jsdoc` to version 4.1.1
 - [docs] updates `README.md` installation guide

## 1.9.0 - 2019-01-31
 - [deps] update `eslint` to version 5.12.1
 - [deps] update `eslint-plugin-import` to version 5.16.0
 - [deps] update `eslint-plugin-jsdoc` to version 4.1.0
 - [deps] update `eslint-plugin-unicorn` to version 7.1.0
 - [beaking] enable `jsdoc/require-returns-check` rule
 - [docs] updates `README.md` installation guide

## 1.8.3 - 2019-01-31
 - [minor] enable `eol-last`

## 1.8.2 - 2019-01-18
 - [minor] loosen `no-duplicate-imports` to resolve conflict with flow types

## 1.8.1 - 2019-01-13
 - [deps] update `eslint-plugin-unicorn` to version 7.0.0
 - [deps] update `eslint-plugin-array-func` to version 3.1.2
 - [deps] fix `peerDependencies` versions
 - [beaking] enable `unicorn/no-console-spaces` rule
 - [beaking] enable `unicorn/no-unreadable-array-destructuring` rule
 - [beaking] enable `unicorn/no-unused-properties` rule
 - [beaking] enable `unicorn/prefer-node-append` rule
 - [beaking] enable `unicorn/prefer-query-selector` rule
 - [docs] updates `README.md` installation guide

## 1.8.0 - 2019-01-13
 - [deps] update `eslint` to version 5.12.0
 - [deps] update `eslint-plugin-array-func` to version 3.1.1
 - [deps] update `eslint-plugin-jsdoc` to version 3.15.1
 - [deps] update `eslint-plugin-no-use-extend-native` to version 0.4.0
 - [beaking] enable `import/no-nodejs-modules` rule
 - [beaking] enable `unicorn/no-process-exit` rule
 - [beaking] enable `no-implicit-coercion` rule
 - [beaking] enable `no-process-env` rule
 - [beaking] enable `no-process-exit` rule
 - [new] added `no-useless-catch` rule
 - [new] added `jsdoc/require-returns` rule
 - [docs] updates `README.md` installation guide

## 1.7.2 - 2018-12-19
 - [patch] disable `import/prefer-default-export` rule

## 1.7.1 - 2018-12-19
 - [patch] disable `import/exports-last` rule
 - [patch] disable `import/no-namespace` rule
 - [patch] disable `import/no-anonymous-default-export` rule
 - [patch] disable `import/group-exports` rule

## 1.7.0 - 2018-12-19
 - [major] remove default `env` configuration
 - [major] update `parserOptions`
 - [pathc] clean React specific methods from `class-methods-use-this` rule

## 1.6.0 - 2018-12-15
 - [major] remove `seekingalpha-base/browser` configuration
 - [patch] add eslint-plugin-import [Style guide](https://www.npmjs.com/package/eslint-plugin-import#style-guide) rules
 - [patch] add `jsdoc/require-description` rule
 - [patch] add `unicorn/prefer-exponentiation-operator` rule
 - [docs] updates `README.md` installation guide

## 1.5.1 - 2018-12-10
 - [deps] update `eslint-plugin-jsdoc` to version 3.14.0
 - [docs] updates `README.md` installation guide

## 1.5.0 - 2018-12-10
 - [deps] fix `peerDependencies` version
 - [docs] updates `README.md` installation guide

## 1.4.0 - 2018-12-10
 - [deps] update `eslint` to version 5.10.0
 - [deps] update `eslint-plugin-array-func` to version 3.1.0
 - internal lint error fixes and documentation updates

## 1.3.3 - 2018-11-20
 - [patch: loosen rule] removed rule `array-element-newline`

## 1.3.2 - 2018-11-20
 - [patch] changed `comma-dangle` rule, now trailing coma is required for multiline statements
 - [patch] changed `arrow-body-style` rule, enforces braces around the function body
 - [patch] changed `arrow-parens` rule, requires parens around arguments in all cases.

## 1.3.1 - 2018-10-16
 - [patch] deprecated `promise/avoid-new`
 - [patch] added `0` and `1` to ignore in `no-magic-numbers`

## 1.3.0 - 2018-09-18
 - [patch] removed rule for node.js

## 1.2.0 - 2018-09-15
 - [deps] update `eslint` to version 5.6.0
 - [deps] update `eslint-plugin-jsdoc` to version 3.8.0
 - [deps] update `eslint-plugin-promise` to version 4.0.1
 - [deps] update `eslint-plugin-unicorn` to version 6.0.1
 - [docs] update `CHANGELOG.md` including previous releases
 - [docs] updates `README.md` installation guide
 - [minor] loosen `max-lines-per-function` rule allowing 100 lines
 - [minor] extend `import/ignore` rule with `less` and `hbs` extensions

## 1.1.3 - 2018-09-11
 - [new] extend `class-methods-use-this` rule with `exceptMethods` for ReactJS(`componentDidMount`, `componentDidUpdate`, `componentWillMount`, `componentWillReceiveProps`, `componentWillUnmount`, `componentWillUpdate`, `render`, `shouldComponentUpdate`)
 - [minor] loosen `promise/catch-or-return` with `{ allowThen: true }`

## 1.1.2 - 2018-09-5
 - [patch] disable `romise/no-native` rule
 - [minor] loosen `function-paren-newline`rule from `never` to `consistent`

## 1.1.1 - 2018-08-17
 - [patch] disable `no-sync` rule
 - [patch] disable `no-process-env` rule
 - [patch] disable `no-process-exit` rule
 - [patch] disable `import/no-nodejs-modules` rule

## 1.1.0 - 2018-08-16
 - [new] introduce `seekingalpha-base/browser` and `seekingalpha-base/node` shareable configurations
 - [deps] update `eslint-plugin-import` to version 2.14.0
 - [patch] disable `init-declarations` rule
 - [patch] disable `no-invalid-this` rule

## 1.0.4 - 2018-08-15
 - [minor] loosen `max-len` rule extending max line length to 150 chars
 - [fix] `dot-notation` rule allowing keywords
 - [patch] disable `func-names` rule
## 1.0.3 - 2018-08-15
 - [docs] fix package installation guide using NPM

## 1.0.2 - 2018-08-14
 - [patch: loosen rules] ignore links in `max-len`

## 1.0.1 - 2018-08-13
 - Initial commit.
