// https://github.com/benmosher/eslint-plugin-import#static-analysis

export default {
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
  // handled by TypeScript
  'import-x/no-unresolved': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md#when-not-to-use-it
  'import-x/named': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md#when-not-to-use-it
  'import-x/default': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
  'import-x/namespace': [
    'error',
    {
      allowComputed: true,
    },
  ],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md
  'import-x/no-restricted-paths': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
  'import-x/no-absolute-path': [
    'error',
    {
      esmodule: true,
      commonjs: true,
      amd: false,
    },
  ],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
  'import-x/no-dynamic-require': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md
  'import-x/no-internal-modules': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
  'import-x/no-webpack-loader-syntax': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
  'import-x/no-self-import': 'error',

  /*
   * very slow
   * https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
   */
  'import-x/no-cycle': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
  'import-x/no-useless-path-segments': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md
  'import-x/no-relative-parent-imports': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
  'import-x/no-relative-packages': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
  'import-x/no-unused-modules': 'error',
};
