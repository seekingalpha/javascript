module.exports = {
  extends: [
    // ESLint rules (https://eslint.org/docs/rules/)
    './rules/eslint/index.js',

    // eslint-plugin-import rules (https://github.com/benmosher/eslint-plugin-import)
    './rules/eslint-plugin-import/index.js',

    // eslint-plugin-array-func rules (https://github.com/freaktechnik/eslint-plugin-array-func)
    './rules/eslint-plugin-array-func/index.js',

    // eslint-plugin-promise rules (https://github.com/xjamundx/eslint-plugin-promise)
    './rules/eslint-plugin-promise/index.js',

    // eslint-plugin-unicorn rules (https://github.com/sindresorhus/eslint-plugin-unicorn)
    './rules/eslint-plugin-unicorn/index.js',
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
    },
  },
};
