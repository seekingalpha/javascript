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
    'promise/catch-or-return': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md
    'promise/no-native': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
    'promise/no-nesting': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md
    'promise/no-promise-in-callback': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise.md
    'promise/no-callback-in-promise': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md
    'promise/avoid-new': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
    'promise/no-new-statics': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md
    'promise/no-return-in-finally': 'error',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
    'promise/valid-params': 'error'

  }

};