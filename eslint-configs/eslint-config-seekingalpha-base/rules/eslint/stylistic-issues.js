const config = require('../config');

// https://eslint.org/docs/rules/#stylistic-issues

module.exports = {

  rules: {

    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: config.arrayBracketNewlineMinItems
      }
    ],

    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': [
      'error',
      {
        multiline: true,
        minItems: config.arrayElementNewlineMinItems
      }
    ],

    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],

    // https://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false
      }
    ],

    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        }
      }
    ],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
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
          NewExpression: false
        }
      }
    ],

    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': [
      'error',
      'that'
    ],

    // https://eslint.org/docs/rules/eol-last
    'eol-last': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: true
      }
    ],

    /*
     * https://eslint.org/docs/rules/func-names
     * TODO enable when needed?
     */
    'func-names': [
      'off',
      'always'
    ],

    // https://eslint.org/docs/rules/func-style
    'func-style': [
      'error',
      'expression',
      {
        allowArrowFunctions: true
      }
    ],

    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': ['error'],

    // https://eslint.org/docs/rules/id-length
    'id-length': [
      'error',
      {
        max: config.idLengthMax,
        properties: 'always',
        exceptions: []
      }
    ],

    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': [
      'error',
      'beside'
    ],

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
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [],
        ignoreComments: false
      }
    ],

    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],

    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],

    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true
          },
          throw: {
            after: true
          },
          case: {
            after: true
          }
        }
      }
    ],

    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true
      }
    ],

    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [
      'error',
      'unix'
    ],

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
        ignorePattern: 'ignore-comment'
      }
    ],

    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false
      }
    ],

    // https://eslint.org/docs/rules/max-depth
    'max-depth': [
      'error',
      config.maxDepth
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
        ignoreUrls: true
      }
    ],

    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'off',
      {
        max: config.maxLinesMax,
        skipBlankLines: true,
        skipComments: true
      }
    ],

    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'error',
      {
        max: config.maxLinesPerFunctionMax,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      }
    ],

    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': [
      'error',
      config.maxNestedCallbacks
    ],

    // https://eslint.org/docs/rules/max-params
    'max-params': [
      'error',
      config.maxParams
    ],

    // https://eslint.org/docs/rules/max-statements
    'max-statements': [
      'error',
      config.maxStatements
    ],

    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': [
      'error',
      {
        max: config.maxStatementsPerLine
      }
    ],

    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': [
      'error',
      'starred-block'
    ],

    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [],
        properties: true
      }
    ],

    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2
      }
    ],

    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

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
            '**'
          ],
          [
            '&',
            '|',
            '^',
            '~',
            '<<',
            '>>',
            '>>>'
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<='
          ],
          [
            '&&',
            '||'
          ],
          [
            'in',
            'instanceof'
          ]
        ],
        allowSamePrecedence: true
      }
    ],

    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'error',

    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: config.noMultipleEmptyLinesMax,
        maxEOF: config.noMultipleEmptyLinesEOF,
        maxBOF: config.noMultipleEmptyLinesBOF
      }
    ],

    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'error',

    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'error',

    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.name="setTimeout"][arguments.length!=2]',
        message: 'setTimeout must always be invoked with two arguments.'
      },
      {
        selector: 'ForInStatement',
        message: 'Use Object.(keys || values) instead'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: 'Do not use with DOT'
      },
      {
        selector: 'BinaryExpression[operator="in"]',
        message: 'use prototype.hasOwnProperty() instead'
      }
    ],

    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // https://eslint.org/docs/rules/no-trailing-space
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false
      }
    ],

    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: false
      }
    ],

    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],

    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {}
      }
    ],

    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: config.newlineObjectExpressionMin,
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          minProperties: config.newlineObjectPatternMin,
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          minProperties: config.newlineImportDeclarationMin,
          multiline: true,
          consistent: true
        },
        ExportDeclaration: {
          minProperties: config.newlineExportDeclarationMin,
          multiline: true,
          consistent: true
        }
      }
    ],

    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true
      }
    ],

    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false
      }
    ],

    // https://eslint.org/docs/rules/one-var
    'one-var': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': [
      'error',
      'initializations'
    ],

    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [
      'error',
      'none'
    ],

    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],

    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'error',

    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // https://eslint.org/docs/rules/quote-props.html
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false
      }
    ],

    // https://eslint.org/docs/rules/quotes
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],

    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': [
      'off',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: true
        }
      }
    ],

    // https://eslint.org/docs/rules/semi
    semi: [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    // https://eslint.org/docs/rules/semi-style
    'semi-style': [
      'error',
      'last'
    ],

    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true
      }
    ],

    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': [
      'off',
      {
        ignoreCase: true
      }
    ],

    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],

    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],

    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'error'

  }

};