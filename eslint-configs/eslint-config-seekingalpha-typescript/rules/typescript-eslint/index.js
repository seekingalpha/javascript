const config = require('../config');

module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],

  rules: {

    '@typescript-eslint/adjacent-overload-signatures': 'error',

    '@typescript-eslint/await-thenable': 'error',

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

    '@typescript-eslint/class-literal-property-style': 'error',

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

    '@typescript-eslint/consistent-generic-constructors': 'error',

    '@typescript-eslint/consistent-indexed-object-style': 'error',

    '@typescript-eslint/consistent-type-assertions': 'error',

    '@typescript-eslint/consistent-type-definitions': 'error',

    '@typescript-eslint/consistent-type-exports': 'error',

    '@typescript-eslint/consistent-type-imports': 'error',

    '@typescript-eslint/default-param-last': 'error',

    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],

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

    '@typescript-eslint/no-base-to-string': 'error',

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

    '@typescript-eslint/no-for-in-array': 'error',

    '@typescript-eslint/no-implied-eval': 'error',

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

    '@typescript-eslint/no-meaningless-void-operator': 'error',

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/no-misused-promises': 'error',

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

    '@typescript-eslint/no-throw-literal': 'error',

    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

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

    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

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

    '@typescript-eslint/prefer-includes': 'error',

    '@typescript-eslint/prefer-literal-enum-member': 'error',

    '@typescript-eslint/prefer-namespace-keyword': 'error',

    '@typescript-eslint/prefer-readonly': 'error',

    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    '@typescript-eslint/prefer-regexp-exec': 'error',

    '@typescript-eslint/prefer-return-this-type': 'error',

    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    '@typescript-eslint/prefer-ts-expect-error': 'error',

    '@typescript-eslint/promise-function-async': 'error',

    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    '@typescript-eslint/require-await': 'error',

    '@typescript-eslint/return-await': 'error',

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

    '@typescript-eslint/switch-exhaustiveness-check': 'error',

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

    '@typescript-eslint/unbound-method': 'error',

    '@typescript-eslint/strict-boolean-expressions': 'error',

    '@typescript-eslint/array-type': 'error',

    '@typescript-eslint/explicit-function-return-type': 'error',

    '@typescript-eslint/explicit-member-accessibility': 'error',

    '@typescript-eslint/explicit-module-boundary-types': 'error',

    '@typescript-eslint/no-confusing-void-expression': 'error',

    '@typescript-eslint/no-floating-promises': 'error',

    '@typescript-eslint/no-redundant-type-constituents': 'error',

    '@typescript-eslint/no-type-alias': 'error',

    '@typescript-eslint/no-unnecessary-condition': 'error',

    '@typescript-eslint/no-unsafe-argument': 'error',

    '@typescript-eslint/no-unsafe-assignment': 'error',

    '@typescript-eslint/no-unsafe-call': 'error',

    '@typescript-eslint/restrict-plus-operands': 'error',

    '@typescript-eslint/no-unsafe-member-access': 'error',

    '@typescript-eslint/no-unsafe-return': 'error',

    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    '@typescript-eslint/prefer-optional-chain': 'error',

    '@typescript-eslint/prefer-readonly-parameter-types': 'error',

    '@typescript-eslint/require-array-sort-compare': 'error',

    '@typescript-eslint/restrict-template-expressions': 'error',

  },
};
