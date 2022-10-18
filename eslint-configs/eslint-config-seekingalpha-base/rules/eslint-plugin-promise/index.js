// https://github.com/xjamundx/eslint-plugin-promise

module.exports = {

  plugins: ['promise'],

  rules: {

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
    'promise/always-return': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
    'promise/no-return-wrap': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
    'promise/param-names': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
    'promise/catch-or-return': [
      'error',
      {
        allowThen: true,
      },
    ],

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md
    'promise/no-multiple-resolved': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md
    'promise/no-native': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
    'promise/no-nesting': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md
    'promise/no-promise-in-callback': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise.md
    'promise/no-callback-in-promise': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md
    'promise/avoid-new': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
    'promise/no-new-statics': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md
    'promise/no-return-in-finally': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
    'promise/valid-params': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md
    'promise/prefer-await-to-callbacks': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md
    'promise/prefer-await-to-then': 'off',
  },

};
