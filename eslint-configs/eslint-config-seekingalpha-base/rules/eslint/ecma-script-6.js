// https://eslint.org/docs/rules/#ecmascript-6

module.exports = {

  rules: {

    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],

    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],

    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],

    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',

    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': ['error'],

    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],

    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],

    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],

    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': [
      'error',
      'never'
    ],

    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',

    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
    'yield-star-spacing': [
      'error',
      'after'
    ]

  }

};