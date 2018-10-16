const config = require('../config');

// https://eslint.org/docs/rules/#best-practices

module.exports = {

  rules: {

    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': [
      'error',
      {
        getWithoutSet: true
      }
    ],

    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'error',

    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    /*
     * https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'componentDidMount',
          'componentDidUpdate',
          'componentWillMount',
          'componentWillReceiveProps',
          'componentWillUnmount',
          'componentWillUpdate',
          'render',
          'shouldComponentUpdate'
        ]
      }
    ],

    // https://eslint.org/docs/rules/complexity
    complexity: [
      'error',
      {
        max: config.complexity
      }
    ],

    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // https://eslint.org/docs/rules/curly
    curly: 'error',

    // https://eslint.org/docs/rules/default-case
    'default-case': [
      'error',
      {
        commentPattern: '^skip\\sdefault'
      }
    ],

    // https://eslint.org/docs/rules/dot-location
    'dot-location': [
      'error',
      'property'
    ],

    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      'error',
      {
        allowKeywords: true
      }
    ],

    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: [
      'error',
      'always'
    ],

    /*
     * https://eslint.org/docs/rules/guard-for-in
     * http://2ality.com/2012/01/objects-as-maps.html
     */
    'guard-for-in': 'error',

    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': [
      'error',
      config.maxClassesPerFile
    ],

    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'error',

    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': [
      'error',
      {
        allowElseIf: false
      }
    ],

    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'error',

    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'error',

    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'error',

    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': [
      'error',
      {
        exceptions: []
      }
    ],

    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'off',

    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',

    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'error',

    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'error',
      {
        // These numbers are used in simple cases, we can exclude them
        ignore: [
          0,
          1
        ],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ],

    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'error',

    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Use Object.defineProperty instead'
      },
      {
        property: '__defineSetter__',
        message: 'Use Object.defineProperty instead'
      },
      {
        object: 'require',
        message: 'Please call require() directly.'
      }
    ],

    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [
      'error',
      {
        props: false
      }
    ],

    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],

    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',

    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true
      }
    ],

    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',

    /*
     * https://eslint.org/docs/rules/require-unicode-regexp
     * TODO turn on?
     */
    'require-unicode-regexp': 'off',

    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false
      }
    ],

    // https://eslint.org/docs/rules/yoda
    yoda: 'error'

  }

};