const config = require('../config');

// https://eslint.org/docs/rules/#deprecated

module.exports = {

  rules: {

    // https://eslint.org/docs/rules/indent-legacy
    'indent-legacy': [
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
      },
    ],

    // https://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],

    // https://eslint.org/docs/rules/newline-after-var
    'newline-after-var': [
      'error',
      'always',
    ],

    // https://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'error',

    // https://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 'error',

    // https://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': 'error',

    // https://eslint.org/docs/rules/no-negated-in-lhs
    'no-negated-in-lhs': 'error',

    // https://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 'error',

    // https://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',

  },

};
