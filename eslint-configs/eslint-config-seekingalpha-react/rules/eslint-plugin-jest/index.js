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

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md
    'jest/lowercase-name': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    'jest/no-jasmine-globals': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
    'jest/no-jest-import': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
    'jest/no-large-snapshots': [
      'error',
      {
        maxSize: 50,
      },
    ],

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
    'jest/prefer-inline-snapshots': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
    'jest/prefer-to-be-null': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
    'jest/prefer-to-be-undefined': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
    'jest/valid-describe': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-empty-title.md
    'jest/no-empty-title': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    'jest/no-commented-out-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 'error',

  },

};
