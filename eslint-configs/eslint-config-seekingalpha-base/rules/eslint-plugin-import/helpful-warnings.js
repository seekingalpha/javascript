// https://github.com/benmosher/eslint-plugin-import#helpful-warnings

module.exports = {

  rules: {

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    /*
     * Stage 0 rule, may be changed. Cool one ;)
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

  },

};