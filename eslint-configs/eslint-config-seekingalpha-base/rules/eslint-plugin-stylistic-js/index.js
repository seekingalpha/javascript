// https://eslint.style/packages/js

const config = require('../config');

module.exports = {
  plugins: ['@stylistic/js'],

  rules: {
    // https://eslint.style/rules/js/array-bracket-newline
    '@stylistic/js/array-bracket-newline': ['error', 'consistent'],

    // https://eslint.style/rules/js/array-bracket-spacing
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],

    // https://eslint.style/rules/js/array-element-newline
    '@stylistic/js/array-element-newline': 'off',

    // https://eslint.style/rules/js/arrow-parens
    '@stylistic/js/arrow-parens': ['error', 'always'],

    // https://eslint.style/rules/js/arrow-spacing
    '@stylistic/js/arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    // https://eslint.style/rules/js/block-spacing
    '@stylistic/js/block-spacing': ['error', 'always'],

    // https://eslint.style/rules/js/brace-style
    '@stylistic/js/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],

    // https://eslint.style/rules/js/comma-dangle
    '@stylistic/js/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    // https://eslint.style/rules/js/comma-spacing
    '@stylistic/js/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.style/rules/js/comma-style
    '@stylistic/js/comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // https://eslint.style/rules/js/computed-property-spacing
    '@stylistic/js/computed-property-spacing': ['error', 'never'],

    // https://eslint.style/rules/js/dot-location
    '@stylistic/js/dot-location': ['error', 'property'],

    // https://eslint.style/rules/js/eol-last
    '@stylistic/js/eol-last': ['error', 'always'],

    // https://eslint.style/rules/js/func-call-spacing
    '@stylistic/js/func-call-spacing': ['error', 'never'],

    /*
     * TODO Enable when fixed for arrow functions
     * https://eslint.style/rules/js/function-call-argument-newline
     */
    '@stylistic/js/function-call-argument-newline': 'off',

    // https://eslint.style/rules/js/function-paren-newline
    '@stylistic/js/function-paren-newline': ['error', 'consistent'],

    // https://eslint.style/rules/js/generator-star-spacing
    '@stylistic/js/generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.style/rules/js/implicit-arrow-linebreak
    '@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],

    // https://eslint.style/rules/js/indent
    '@stylistic/js/indent': [
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

    // https://eslint.style/rules/js/jsx-quotes
    '@stylistic/js/jsx-quotes': ['error', 'prefer-double'],

    // https://eslint.style/rules/js/key-spacing
    '@stylistic/js/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],

    // https://eslint.style/rules/js/keyword-spacing
    '@stylistic/js/keyword-spacing': [
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

    // https://eslint.style/rules/js/linebreak-style
    '@stylistic/js/linebreak-style': ['error', 'unix'],

    // https://eslint.style/rules/js/lines-around-comment
    '@stylistic/js/lines-around-comment': [
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
      },
    ],

    // https://eslint.style/rules/js/lines-between-class-members
    '@stylistic/js/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    // https://eslint.style/rules/js/max-len
    '@stylistic/js/max-len': [
      'error',
      {
        code: config.maxLen,
        tabWidth: config.indent,
        comments: config.maxLen,
        ignorePattern: 'ignore-long-line',
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreRegExpLiterals: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreUrls: true,
      },
    ],

    // https://eslint.style/rules/js/max-statements-per-line
    '@stylistic/js/max-statements-per-line': [
      'error',
      {
        max: config.maxStatementsPerLine,
      },
    ],

    // https://eslint.style/rules/js/multiline-ternary
    '@stylistic/js/multiline-ternary': 'off',

    // https://eslint.style/rules/js/new-parens
    '@stylistic/js/new-parens': 'error',

    // https://eslint.style/rules/js/newline-per-chained-call
    '@stylistic/js/newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],

    // https://eslint.style/rules/js/no-confusing-arrow
    '@stylistic/js/no-confusing-arrow': [
      'error',
      {
        allowParens: false,
        onlyOneSimpleParam: false,
      },
    ],

    // https://eslint.style/rules/js/no-extra-parens
    '@stylistic/js/no-extra-parens': [
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

    // https://eslint.style/rules/js/no-extra-semi
    '@stylistic/js/no-extra-semi': 'error',

    // https://eslint.style/rules/js/no-floating-decimal
    '@stylistic/js/no-floating-decimal': 'error',

    // https://eslint.style/rules/js/no-mixed-operators
    '@stylistic/js/no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],

    // https://eslint.style/rules/js/no-mixed-spaces-and-tabs
    '@stylistic/js/no-mixed-spaces-and-tabs': 'error',

    // https://eslint.style/rules/js/no-multi-spaces
    '@stylistic/js/no-multi-spaces': 'error',

    // https://eslint.style/rules/js/no-multiple-empty-lines
    '@stylistic/js/no-multiple-empty-lines': [
      'error',
      {
        max: config.noMultipleEmptyLinesMax,
        maxEOF: config.noMultipleEmptyLinesEOF,
        maxBOF: config.noMultipleEmptyLinesBOF,
      },
    ],

    // https://eslint.style/rules/js/no-tabs
    '@stylistic/js/no-tabs': 'error',

    // https://eslint.style/rules/js/no-trailing-spaces
    '@stylistic/js/no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // https://eslint.style/rules/js/no-whitespace-before-property
    '@stylistic/js/no-whitespace-before-property': 'error',

    // https://eslint.style/rules/js/nonblock-statement-body-position
    '@stylistic/js/nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],

    // https://eslint.style/rules/js/object-curly-newline
    '@stylistic/js/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: config.newlineObjectExpressionMin,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: config.newlineObjectPatternMin,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: config.newlineImportDeclarationMin,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: config.newlineExportDeclarationMin,
          multiline: true,
          consistent: true,
        },
      },
    ],

    // https://eslint.style/rules/js/object-curly-spacing
    '@stylistic/js/object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],

    // https://eslint.style/rules/js/object-property-newline
    '@stylistic/js/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],

    // https://eslint.style/rules/js/one-var-declaration-per-line
    '@stylistic/js/one-var-declaration-per-line': ['error', 'initializations'],

    // https://eslint.style/rules/js/operator-linebreak
    '@stylistic/js/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // https://eslint.style/rules/js/padded-blocks
    '@stylistic/js/padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],

    // https://eslint.style/rules/js/padding-line-between-statements
    '@stylistic/js/padding-line-between-statements': [
      'error',
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
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],

    // https://eslint.style/rules/js/quote-props
    '@stylistic/js/quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],

    // https://eslint.style/rules/js/quotes
    '@stylistic/js/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    // https://eslint.style/rules/js/rest-spread-spacing
    '@stylistic/js/rest-spread-spacing': ['error', 'never'],

    // https://eslint.style/rules/js/semi
    '@stylistic/js/semi': ['error', 'always'],

    // https://eslint.style/rules/js/semi-spacing
    '@stylistic/js/semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.style/rules/js/semi-style
    '@stylistic/js/semi-style': ['error', 'last'],

    // https://eslint.style/rules/js/space-before-blocks
    '@stylistic/js/space-before-blocks': 'error',

    // https://eslint.style/rules/js/space-before-function-paren
    '@stylistic/js/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // https://eslint.style/rules/js/space-in-parens
    '@stylistic/js/space-in-parens': ['error', 'never'],

    // https://eslint.style/rules/js/space-infix-ops
    '@stylistic/js/space-infix-ops': 'error',

    // https://eslint.style/rules/js/space-unary-ops
    '@stylistic/js/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // https://eslint.style/rules/js/spaced-comment
    '@stylistic/js/spaced-comment': ['error', 'always'],

    // https://eslint.style/rules/js/switch-colon-spacing
    '@stylistic/js/switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],

    // https://eslint.style/rules/js/template-curly-spacing
    '@stylistic/js/template-curly-spacing': 'error',

    // https://eslint.style/rules/js/template-tag-spacing
    '@stylistic/js/template-tag-spacing': ['error', 'never'],

    // https://eslint.style/rules/js/wrap-iife
    '@stylistic/js/wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],

    // https://eslint.style/rules/js/wrap-regex
    '@stylistic/js/wrap-regex': 'error',

    // https://eslint.style/rules/js/yield-star-spacing
    '@stylistic/js/yield-star-spacing': ['error', 'after'],
  },
};
