// https://eslint.org/docs/rules/#variables

module.exports = {

  rules: {

    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // https://eslint.org/docs/rules/no-label-va
    'no-label-var': 'error',

    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
      'error',
      {
        name: 'event',
        message: 'Use local parameter instead.'
      },
      {
        name: 'fdescribe',
        message: 'Do not commit fdescribe. Use describe instead.'
      },
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead.'
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead'
      }
    ],

    /*
     * https://eslint.org/docs/rules/no-shadow
     * https://en.wikipedia.org/wiki/Variable_shadowing
     */
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: []
      }
    ],

    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '[iI]gnored',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '[iI]gnored',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '[iI]gnored'
      }
    ],

    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true
      }
    ]

  }

};