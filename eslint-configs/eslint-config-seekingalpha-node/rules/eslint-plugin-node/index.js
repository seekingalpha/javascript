module.exports = {
  plugins: ['node'],

  rules: {

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
    'node/no-extraneous-require': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    'node/no-missing-require': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    'node/no-unsupported-features/es-syntax': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
    'node/exports-style': [
      'error',
      'module.exports',
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
    'node/prefer-global/buffer': [
      'error',
      'always',
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
    'node/prefer-global/console': [
      'error',
      'always',
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
    'node/prefer-global/process': [
      'error',
      'always',
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
    'node/prefer-global/url-search-params': [
      'error',
      'always',
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
    'node/prefer-global/url': [
      'error',
      'always',
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    'node/no-unpublished-require': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'node/shebang': 'off',

    'node/no-process-exit': 'off',
  },
};