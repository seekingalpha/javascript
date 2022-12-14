const config = require('../config');

module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],

  rules: {

    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Require TS
    '@typescript-eslint/await-thenable': 'off',

    '@typescript-eslint/ban-ts-comment': 'error',

    '@typescript-eslint/ban-tslint-comment': 'error',

    '@typescript-eslint/ban-types': 'error',

    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],

    '@typescript-eslint/class-literal-property-style': [
      'error', 'fields',
    ],

    '@typescript-eslint/comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    '@typescript-eslint/consistent-generic-constructors': [
      'error', 'constructor',
    ],

    '@typescript-eslint/consistent-indexed-object-style': 'error',

    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow',
    }],

    '@typescript-eslint/consistent-type-definitions': 'error',

    // Require TS
    '@typescript-eslint/consistent-type-exports': 'off',

    // Require TS
    '@typescript-eslint/naming-convention': 'off',

    '@typescript-eslint/consistent-type-imports': 'error',

    '@typescript-eslint/default-param-last': 'error',

    /*
     *  Requires TS
     * '@typescript-eslint/dot-notation': [
     *   'error',
     *   {
     *     allowKeywords: true,
     *   },
     * ],
     */

    '@typescript-eslint/dot-notation': 'off',

    '@typescript-eslint/func-call-spacing': [
      'error',
      'never',
    ],

    '@typescript-eslint/indent': [
      'error',
      config.indent,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 0,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoredNodes: [],
        ignoreComments: false,
      },
    ],

    '@typescript-eslint/init-declarations': [
      'off',
      'always',
    ],

    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
        },
      },
    ],

    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    '@typescript-eslint/member-delimiter-style': 'error',

    '@typescript-eslint/member-ordering': 'error',

    '@typescript-eslint/method-signature-style': 'error',

    '@typescript-eslint/no-array-constructor': 'error',

    // Require TS
    '@typescript-eslint/no-base-to-string': 'off',

    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    '@typescript-eslint/no-dupe-class-members': 'error',

    '@typescript-eslint/no-duplicate-enum-values': 'error',

    '@typescript-eslint/no-dynamic-delete': 'error',

    '@typescript-eslint/no-empty-function': 'error',

    '@typescript-eslint/no-empty-interface': 'error',

    '@typescript-eslint/no-explicit-any': 'error',

    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    '@typescript-eslint/no-extra-semi': 'error',

    '@typescript-eslint/no-extraneous-class': 'error',

    // Requires TS
    '@typescript-eslint/no-for-in-array': 'off',

    /*
     * Requires TS
     * '@typescript-eslint/no-implied-eval': 'error',
     */

    '@typescript-eslint/no-implied-eval': 'off',

    '@typescript-eslint/no-inferrable-types': 'error',

    '@typescript-eslint/no-invalid-void-type': 'error',

    '@typescript-eslint/no-loop-func': 'error',

    '@typescript-eslint/no-loss-of-precision': 'error',

    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        // These numbers are used in simple cases, we can exclude them
        ignore: [
          -1,
          0,
          1,
        ],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],

    // Requires TS
    '@typescript-eslint/no-meaningless-void-operator': 'off',

    '@typescript-eslint/no-misused-new': 'error',

    // Requires TS
    '@typescript-eslint/no-misused-promises': 'off',

    '@typescript-eslint/no-namespace': 'error',

    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    '@typescript-eslint/no-non-null-assertion': 'error',

    '@typescript-eslint/parameter-properties': 'error',

    '@typescript-eslint/no-redeclare': 'error',

    '@typescript-eslint/no-require-imports': 'error',

    '@typescript-eslint/no-restricted-imports': 'error',

    '@typescript-eslint/no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: [],
      },
    ],

    '@typescript-eslint/no-this-alias': 'error',

    /*
     * Requires TS
     * '@typescript-eslint/no-throw-literal': 'error',
     */

    '@typescript-eslint/no-throw-literal': 'off',

    // Requires TS
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

    // Requires TS
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    // Requires TS
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    // Requires TS
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '[iI]gnored',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '[iI]gnored',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '[iI]gnored',
      },
    ],

    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],

    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/no-useless-empty-export': 'error',

    '@typescript-eslint/no-var-requires': 'error',

    // Requires TS
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    '@typescript-eslint/object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],

    '@typescript-eslint/padding-line-between-statements': [
      'error',

      // following 2 lines are replacement for deprecated lines-around-directive https://eslint.org/docs/rules/lines-around-directive
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },

      // following 2 lines are replacement for deprecated newline-after-var https://eslint.org/docs/rules/newline-after-var
      {
        blankLine: 'always',
        prev: [
          'const', 'let', 'var',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const', 'let', 'var',
        ],
        next: [
          'const', 'let', 'var',
        ],
      },

      // following line are replacement for deprecated newline-before-return https://eslint.org/docs/rules/newline-before-return
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],

    '@typescript-eslint/prefer-as-const': 'error',

    '@typescript-eslint/prefer-enum-initializers': 'error',

    '@typescript-eslint/prefer-for-of': 'error',

    '@typescript-eslint/prefer-function-type': 'error',

    // Requires TS
    '@typescript-eslint/prefer-includes': 'off',

    '@typescript-eslint/prefer-literal-enum-member': 'error',

    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Require TS
    '@typescript-eslint/prefer-readonly': 'off',

    // Require TS
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',

    // Require TS
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // Require TS
    '@typescript-eslint/prefer-return-this-type': 'off',

    // Require TS
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Require TS
    '@typescript-eslint/promise-function-async': 'off',

    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    /*
     * Requires TS
     * '@typescript-eslint/require-await': 'error',
     */

    '@typescript-eslint/require-await': 'off',

    /*
     * Requires TS
     * '@typescript-eslint/return-await': 'error',
     */

    '@typescript-eslint/return-await': 'off',

    '@typescript-eslint/semi': [
      'error',
      'always',
    ],

    '@typescript-eslint/sort-type-constituents': 'error',

    '@typescript-eslint/space-before-blocks': 'error',

    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    '@typescript-eslint/space-infix-ops': 'error',

    // Requires TS
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    '@typescript-eslint/triple-slash-reference': 'error',

    '@typescript-eslint/type-annotation-spacing': 'error',

    '@typescript-eslint/typedef': 'error',

    '@typescript-eslint/unified-signatures': 'error',

    '@typescript-eslint/no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: false,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false,
      },
    ],

    '@typescript-eslint/no-invalid-this': 'error',

    // Require TS
    '@typescript-eslint/unbound-method': 'off',

    // Require TS
    '@typescript-eslint/strict-boolean-expressions': 'off',

    '@typescript-eslint/array-type': 'error',

    '@typescript-eslint/explicit-function-return-type': 'error',

    '@typescript-eslint/explicit-member-accessibility': 'error',

    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Require TS
    '@typescript-eslint/no-confusing-void-expression': 'off',

    // Require TS
    '@typescript-eslint/no-floating-promises': 'off',

    // Require TS
    '@typescript-eslint/no-redundant-type-constituents': 'off',

    '@typescript-eslint/no-type-alias': 'error',

    // Require TS
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // Require TS
    '@typescript-eslint/no-unsafe-argument': 'off',

    // Require TS
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Require TS
    '@typescript-eslint/no-unsafe-call': 'off',

    // Require TS
    '@typescript-eslint/restrict-plus-operands': 'off',

    // Require TS
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // Require TS
    '@typescript-eslint/no-unsafe-return': 'off',

    // Require TS
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    '@typescript-eslint/prefer-optional-chain': 'error',

    // Require TS
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // Require TS
    '@typescript-eslint/require-array-sort-compare': 'off',

    // Require TS
    '@typescript-eslint/restrict-template-expressions': 'off',

  },
};
