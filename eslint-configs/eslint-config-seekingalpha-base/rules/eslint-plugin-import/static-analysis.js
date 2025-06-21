// https://github.com/benmosher/eslint-plugin-import#static-analysis

export default {
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
  'import/no-unresolved': [
    'error',
    {
      commonjs: true,
      caseSensitive: true,
    },
  ],

  // Prefer eslint-plugin-n
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/enforce-node-protocol-usage.md
  'import/enforce-node-protocol-usage': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
  'import/named': 'error',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
  'import/default': 'error',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
  'import/namespace': [
    'error',
    {
      allowComputed: true,
    },
  ],

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
  'import/no-restricted-paths': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
  'import/no-absolute-path': [
    'error',
    {
      esmodule: true,
      commonjs: true,
      amd: false,
    },
  ],

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
  'import/no-dynamic-require': 'error',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
  'import/no-internal-modules': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
  'import/no-webpack-loader-syntax': 'error',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
  'import/no-self-import': 'error',

  /*
   * very slow
   * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
   */
  'import/no-cycle': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
  'import/no-useless-path-segments': 'error',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
  'import/no-relative-parent-imports': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md
  'import/no-relative-packages': 'error',

  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
  'import/no-unused-modules': 'error',
};
