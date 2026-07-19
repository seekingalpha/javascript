// https://github.com/benmosher/eslint-plugin-import#style-guide
export default {
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/.md
  'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
  'import-x/first': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
  'import-x/exports-last': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
  'import-x/no-duplicates': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md
  'import-x/no-namespace': ['error', { ignore: ['*.scss'] }],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
  'import-x/extensions': [
    'error',
    'always',
    {
      ignorePackages: true,
    },
  ],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
  // handled by oxfmt
  'import-x/order': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
  'import-x/newline-after-import': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
  'import-x/prefer-default-export': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md
  'import-x/max-dependencies': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md
  'import-x/no-unassigned-import': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
  'import-x/no-named-default': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
  'import-x/no-default-export': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
  'import-x/no-anonymous-default-export': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
  'import-x/group-exports': 'off',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md
  'import-x/dynamic-import-chunkname': [
    'error',
    {
      importFunctions: [],
      webpackChunknameFormat: String.raw`[a-zA-Z\d]+-[S|R|W|M](_(Pro|Pre|In|Out)+)?`,
    },
  ],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md
  'import-x/no-named-export': 'off',
};
