module.exports = {

  plugins: ['jest'],

  rules: {
    // Jest Plugin https://github.com/jest-community/eslint-plugin-jest

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/require-tothrow-message.md
    'jest/require-tothrow-message': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-callback.md
    'jest/no-test-callback': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-truthy-falsy.md
    'jest/no-truthy-falsy': 'error',
  },

};