// https://eslint.style/packages/ts

const config = require('../config');

module.exports = {
  plugins: ['@stylistic/ts'],

  rules: {
    // https://eslint.style/rules/ts/block-spacing
    '@stylistic/ts/block-spacing': ['error', 'always'],

    // https://eslint.style/rules/ts/brace-style
    '@stylistic/ts/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],

    // https://eslint.style/rules/ts/comma-dangle
    '@stylistic/ts/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    // https://eslint.style/rules/ts/comma-spacing
    '@stylistic/ts/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.style/rules/ts/function-call-spacing
    '@stylistic/ts/function-call-spacing': ['error', 'never'],

    // https://eslint.style/rules/ts/indent
    '@stylistic/ts/indent': [
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

    // https://eslint.style/rules/ts/key-spacing
    '@stylistic/ts/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],

    // https://eslint.style/rules/ts/keyword-spacing
    '@stylistic/ts/keyword-spacing': [
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

    // https://eslint.style/rules/ts/lines-around-comment
    '@stylistic/ts/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: false,
        allowArrayEnd: false,
        allowClassStart: true,
        allowClassEnd: false,
        applyDefaultIgnorePatterns: true,
        ignorePattern: '@ts-expect-error',

        // typescript extension
        allowEnumEnd: true,
        allowEnumStart: true,
        allowInterfaceEnd: true,
        allowInterfaceStart: true,
        allowModuleEnd: true,
        allowModuleStart: true,
        allowTypeEnd: true,
        allowTypeStart: true,
      },
    ],

    // https://eslint.style/rules/ts/lines-between-class-members
    '@stylistic/ts/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    // https://eslint.style/rules/ts/member-delimiter-style
    '@stylistic/ts/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],

    // https://eslint.style/rules/ts/no-extra-parens
    '@stylistic/ts/no-extra-parens': [
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

    // https://eslint.style/rules/ts/no-extra-semi
    '@stylistic/ts/no-extra-semi': 'error',

    // https://eslint.style/rules/ts/object-curly-spacing
    '@stylistic/ts/object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],

    // https://eslint.style/rules/ts/padding-line-between-statements
    '@stylistic/ts/padding-line-between-statements': [
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
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },

      // following line are replacement for deprecated newline-before-return https://eslint.org/docs/rules/newline-before-return
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],

    // https://eslint.style/rules/ts/quotes
    '@stylistic/ts/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // https://eslint.style/rules/ts/semi
    '@stylistic/ts/semi': ['error', 'always'],

    // https://eslint.style/rules/ts/space-before-blocks
    '@stylistic/ts/space-before-blocks': 'error',

    // https://eslint.style/rules/ts/space-before-function-paren
    '@stylistic/ts/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // https://eslint.style/rules/ts/space-infix-ops
    '@stylistic/ts/space-infix-ops': 'error',

    // https://eslint.style/rules/ts/type-annotation-spacing
    '@stylistic/ts/type-annotation-spacing': 'error',
  },
};
