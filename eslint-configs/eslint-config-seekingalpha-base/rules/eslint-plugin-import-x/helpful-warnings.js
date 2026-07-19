// https://github.com/benmosher/eslint-plugin-import#helpful-warnings

export default {
  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
  'import-x/export': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
  'import-x/no-named-as-default': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
  'import-x/no-named-as-default-member': 'error',

  /*
   * Stage 0 rule, may be changed. Cool one ;)
   * https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
   */
  'import-x/no-deprecated': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
  'import-x/no-empty-named-blocks': 'error',

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
  'import-x/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    },
  ],

  // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
  'import-x/no-mutable-exports': 'error',
};
