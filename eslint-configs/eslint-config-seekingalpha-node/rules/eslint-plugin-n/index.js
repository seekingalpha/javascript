import nodePlugin from 'eslint-plugin-n';

export default {
  plugins: {
    // oxlint-disable-next-line id-length
    n: nodePlugin,
  },
  rules: {
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-require.md
    // migrated to ESM
    'n/no-extraneous-require': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-require.md
    // migrated to ESM
    'n/no-missing-require': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-syntax.md
    'n/no-unsupported-features/es-syntax': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/exports-style.md
    // migrated to ESM
    'n/exports-style': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
    'n/prefer-global/buffer': ['error', 'always'],

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/console.md
    'n/prefer-global/console': ['error', 'always'],

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/process.md
    'n/prefer-global/process': ['error', 'always'],

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url-search-params.md
    'n/prefer-global/url-search-params': ['error', 'always'],

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/url.md
    'n/prefer-global/url': ['error', 'always'],

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
    // disabled in favour of import/no-extraneous-dependencies
    'n/no-extraneous-import': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/process-exit-as-throw.md
    'n/process-exit-as-throw': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-top-level-await.md
    'n/no-top-level-await': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    'n/no-unsupported-features/es-builtins': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    'n/no-unsupported-features/node-builtins': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-bin.md
    'n/no-unpublished-bin': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
    // disabled in favor of import/no-unresolved
    'n/no-missing-import': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-import.md
    'n/no-unpublished-import': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
    'n/no-unpublished-require': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
    'n/no-deprecated-api': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-callback-literal.md
    'n/no-callback-literal': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
    // migrated to ESM
    'n/global-require': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
    'n/handle-callback-err': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
    // migrated to ESM
    'n/no-mixed-requires': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
    // migrated to ESM
    'n/no-new-require': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
    'n/no-path-concat': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
    'n/no-process-env': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-import.md
    'n/no-restricted-import': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-require.md
    'n/no-restricted-require': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
    'n/no-process-exit': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
    // requires type checking
    'n/no-sync': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
    'n/callback-return': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/shebang.md
    'n/shebang': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-decoder.md
    'n/prefer-global/text-decoder': ['error', 'always'],

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/text-encoder.md
    'n/prefer-global/text-encoder': ['error', 'always'],

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/file-extension-in-import.md
    // disabled in favour of import/extensions
    'n/file-extension-in-import': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/dns.md
    'n/prefer-promises/dns': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-promises/fs.md
    'n/prefer-promises/fs': 'error',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-exports-assign.md
    // migrated to ESM
    'n/no-exports-assign': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/hashbang.md
    'n/hashbang': 'off',

    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-node-protocol.md
    'n/prefer-node-protocol': 'error',
  },
};
