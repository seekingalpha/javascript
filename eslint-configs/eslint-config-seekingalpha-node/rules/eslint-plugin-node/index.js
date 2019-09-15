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

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
    'node/no-extraneous-import': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
    'node/process-exit-as-throw': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    'node/no-unsupported-features/es-builtins': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    'node/no-unsupported-features/node-builtins': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
    'node/no-unpublished-bin': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    'node/no-missing-import': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
    'node/no-unpublished-require': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'node/shebang': 'off',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
    'node/prefer-global/text-decoder': [
      'error',
      'always',
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
    'node/prefer-global/text-encoder': [
      'error',
      'always',
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
    'node/file-extension-in-import': [
      'error',
      'always',
      {
        '.js': 'never',
        '.jsx': 'never',
      },
    ],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
    'node/prefer-promises/dns': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
    'node/prefer-promises/fs': 'error',

    // https://github.com/mysticatea/eslint-plugin-node/blob/HEAD/docs/rules/no-exports-assign.md
    'node/no-exports-assign': 'error',
  },
};
