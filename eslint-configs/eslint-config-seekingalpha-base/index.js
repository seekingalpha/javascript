module.exports = {

  extends: [

    './rules/parser-options.js',

    // ESLint rules (https://eslint.org/docs/rules/)
    './rules/eslint/index.js',

    // eslint-plugin-import rules (https://github.com/benmosher/eslint-plugin-import)
    './rules/eslint-plugin-import/index.js',

    // eslint-plugin-array-func rules (https://github.com/freaktechnik/eslint-plugin-array-func)
    './rules/eslint-plugin-array-func/index.js',

    // eslint-plugin-jsdoc rules (https://github.com/gajus/eslint-plugin-jsdoc)
    './rules/eslint-plugin-jsdoc/index.js',

    // eslint-plugin-no-use-extend-native rules (https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
    './rules/eslint-plugin-no-use-extend-native/index.js',

    // eslint-plugin-promise rules (https://github.com/xjamundx/eslint-plugin-promise)
    './rules/eslint-plugin-promise/index.js',

    // eslint-plugin-unicorn rules (https://github.com/sindresorhus/eslint-plugin-unicorn)
    './rules/eslint-plugin-unicorn/index.js',

  ],

  env: {
    browser: true,
    node: true,
    'shared-node-browser': true,
  },

};