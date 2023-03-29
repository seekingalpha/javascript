const config = require('../config');

module.exports = {
  // https://eslint.org/docs/rules/#layout-formatting

  rules: {
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': 'off',

    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/comma-style
    'comma-style': [
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

    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    /*
     * TODO Enable when fixed for arrow functions
     * https://eslint.org/docs/rules/function-call-argument-newline
     */
    'function-call-argument-newline': 'off',

    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // https://eslint.org/docs/rules/indent
    indent: [
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

    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],

    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
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

    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': [
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

    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    // https://eslint.org/docs/rules/max-len
    'max-len': [
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

    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': [
      'error',
      {
        max: config.maxStatementsPerLine,
      },
    ],

    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['error', 'never'],

    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],

    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [
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

    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: config.noMultipleEmptyLinesMax,
        maxEOF: config.noMultipleEmptyLinesEOF,
        maxBOF: config.noMultipleEmptyLinesBOF,
      },
    ],

    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // https://eslint.org/docs/rules/no-trailing-space
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],

    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
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

    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],

    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],

    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': ['error', 'none'],

    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],

    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
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

    // https://eslint.org/docs/rules/quotes
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/semi
    semi: ['error', 'always'],

    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // https://eslint.org/docs/rules/semi-style
    'semi-style': ['error', 'last'],

    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],

    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],

    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'error',

    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
    'yield-star-spacing': ['error', 'after'],
  },
};
