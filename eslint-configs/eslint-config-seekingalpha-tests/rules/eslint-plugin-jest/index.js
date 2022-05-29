module.exports = {

  plugins: ['jest'],

  rules: {
    // Jest Plugin https://github.com/jest-community/eslint-plugin-jest

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    'jest/consistent-test-it': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    'jest/expect-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
    'jest/prefer-lowercase-title': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
    'jest/prefer-snapshot-hint': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
    'jest/max-nested-describe': [
      'error',
      {
        max: 2,
      },
    ],

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-alias-methods.md
    'jest/no-alias-methods': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    'jest/no-commented-out-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md
    'jest/no-conditional-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
    'jest/no-conditional-in-test': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md
    'jest/no-deprecated-functions': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
    'jest/no-export': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
    'jest/no-hooks': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md
    'jest/no-interpolation-in-snapshots': 'error',

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

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    'jest/no-mocks-import': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-matchers.md
    'jest/no-restricted-matchers': [
      'error',
      {
        toBeFalsy: 'Use `toBe(false)` instead.',
        toBeTruthy: 'Use `toBe(true)` instead.',
      },
    ],

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-test-callback.md
    'jest/no-done-callback': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
    'jest/no-test-prefixes': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    'jest/no-test-return-statement': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    'jest/prefer-called-with': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
    'jest/prefer-comparison-matcher': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
    'jest/prefer-equality-matcher': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
    'jest/prefer-expect-assertions': 'off',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
    'jest/prefer-expect-resolves': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
    'jest/prefer-hooks-in-order': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
    'jest/prefer-to-be': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-todo.md
    'jest/prefer-todo': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/require-tothrow-message.md
    'jest/require-to-throw-message': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
    'jest/require-top-level-describe': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
    'jest/valid-describe-callback': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
    'jest/valid-expect': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',

    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
    'jest/valid-title': 'error',

    /*
     * only relevant for TypeScript
     * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
     */
    'jest/unbound-method': 'off',
  },

};
