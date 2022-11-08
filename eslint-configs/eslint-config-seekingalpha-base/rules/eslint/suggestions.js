const config = require('../config');

module.exports = {

  // https://eslint.org/docs/rules/#suggestions

  rules: {

    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],

    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
      },
    ],

    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'error',

    // https://eslint.org/docs/rules/complexity
    complexity: [
      'error',
      {
        max: config.complexity,
      },
    ],

    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'error',

    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': [
      'error',
      'that',
    ],

    // https://eslint.org/docs/rules/curly
    curly: 'error',

    // https://eslint.org/docs/rules/default-case
    'default-case': [
      'error',
      {
        commentPattern: '^skip\\sdefault',
      },
    ],

    // https://eslint.org/docs/rules/default-case-last
    'default-case-last': 'error',

    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],

    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: true,
      },
    ],

    /*
     * https://eslint.org/docs/rules/func-names
     * TODO enable when needed?
     */
    'func-names': [
      'off',
      'always',
    ],

    // https://eslint.org/docs/rules/func-style
    'func-style': [
      'error',
      'expression',
      {
        allowArrowFunctions: true,
      },
    ],

    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': [
      'error', 'getBeforeSet',
    ],

    /*
     * https://eslint.org/docs/rules/guard-for-in
     * http://2ality.com/2012/01/objects-as-maps.html
     */
    'guard-for-in': 'error',

    // https://eslint.org/docs/rules/id-blacklist
    'id-denylist': 'off',

    // https://eslint.org/docs/rules/id-length
    'id-length': [
      'error',
      {
        max: config.idLengthMax,
        properties: 'always',
        exceptions: [],
      },
    ],

    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': [
      'off',
      'always',
    ],

    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': [
      'error',
      config.maxClassesPerFile,
    ],

    // https://eslint.org/docs/rules/max-depth
    'max-depth': [
      'error',
      config.maxDepth,
    ],

    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'off',
      {
        max: config.maxLinesMax,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'error',
      {
        max: config.maxLinesPerFunctionMax,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': [
      'error',
      config.maxNestedCallbacks,
    ],

    // https://eslint.org/docs/rules/max-params
    'max-params': [
      'error',
      config.maxParams,
    ],

    // https://eslint.org/docs/rules/max-statements
    'max-statements': [
      'error',
      config.maxStatements,
    ],

    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': [
      'error',
      'starred-block',
    ],

    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true, // eslint-disable-line unicorn/no-keyword-prefix
        newIsCapExceptions: [], // eslint-disable-line unicorn/no-keyword-prefix
        capIsNew: false,
        capIsNewExceptions: [],
        properties: true,
      },
    ],

    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'error',

    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'error',

    // https://eslint.org/docs/rules/no-console
    'no-console': 'error',

    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'error',

    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'error',

    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],

    // https://eslint.org/docs/rules/no-empty
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],

    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'error',

    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'error',

    // https://eslint.org/docs/latest/rules/no-empty-static-block
    'no-empty-static-block': 'error',

    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'error',

    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'error',

    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'error',

    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': [
      'error',
      {
        exceptions: [],
      },
    ],

    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'error',

    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'error',

    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // https://eslint.org/docs/rules/no-label-va
    'no-label-var': 'error',

    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'error',

    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'error',
      {
        // These numbers are used in simple cases, we can exclude them
        ignore: [
          // eslint-disable-next-line no-magic-numbers
          -1,
          0,
          1,
        ],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        groups: [
          [
            '+',
            '-',
            '*',
            '/',
            '%',
            '**',
          ],
          [
            '&',
            '|',
            '^',
            '~',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          [
            '&&',
            '||',
          ],
          [
            'in',
            'instanceof',
          ],
        ],
        allowSamePrecedence: true,
      },
    ],

    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',

    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'error',

    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'error',

    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',

    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'error',

    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'error',

    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': 'off',

    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': [
      'error',
      {
        name: 'event',
        message: 'Use local parameter instead.',
      },
      {
        name: 'fdescribe',
        message: 'Do not commit fdescribe. Use describe instead.',
      },
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead.',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead',
      },
    ],

    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'error',

    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Use Object.defineProperty instead',
      },
      {
        property: '__defineSetter__',
        message: 'Use Object.defineProperty instead',
      },
      {
        object: 'require',
        message: 'Please call require() directly.',
      },
    ],

    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.name="setTimeout"][arguments.length!=2]',
        message: 'setTimeout must always be invoked with two arguments.',
      },
      {
        selector: 'ForInStatement',
        message: 'Use Object.(keys || values) instead',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: 'Do not use with DOT',
      },
      {
        selector: 'BinaryExpression[operator="in"]',
        message: 'use prototype.hasOwnProperty() instead',
      },
    ],

    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'error',

    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'error',

    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    /*
     * https://eslint.org/docs/rules/no-shadow
     * https://en.wikipedia.org/wiki/Variable_shadowing
     */
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: [],
      },
    ],

    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'error',

    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: false,
      },
    ],

    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],

    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'error',

    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'error',

    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // https://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],

    // https://eslint.org/docs/rules/one-var
    'one-var': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': [
      'error',
      'initializations',
    ],

    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],

    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    /*
     * https://eslint.org/docs/rules/prefer-named-capture-group
     * supported only by ECMAScript 2018
     */
    'prefer-named-capture-group': 'off',

    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // https://eslint.org/docs/rules/prefer-object-has-own
    'prefer-object-has-own': 'off',

    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],

    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 'error',

    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],

    // https://eslint.org/docs/rules/radix
    radix: 'error',

    // https://eslint.org/docs/rules/require-await
    'require-await': 'error',

    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'error',

    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',

    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],

    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': [
      'off',
      {
        ignoreCase: true,
      },
    ],

    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/strict
    strict: [
      'error',
      'never',
    ],

    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'error',

    // https://eslint.org/docs/rules/yoda
    yoda: 'error',

  },

};
