// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {

  plugins: ['unicorn'],

  rules: {

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err',
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
    'unicorn/explicit-length-check': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
    'unicorn/no-abusive-eslint-disable': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
    'unicorn/no-unused-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md
    'unicorn/prefer-node-append': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
     * Already validated by EsLint node rule
     */
    'unicorn/no-process-exit': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
    'unicorn/throw-new-error': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
    'unicorn/number-literal-case': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
    'unicorn/escape-case': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
    'unicorn/no-array-instanceof': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
    'unicorn/no-new-buffer': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
    'unicorn/no-hex-escape': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
    'unicorn/custom-error-definition': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
    'unicorn/prefer-starts-ends-with': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
    'unicorn/prefer-type-error': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md
    'unicorn/no-fn-reference-in-iterator': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
    'unicorn/import-index': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
    'unicorn/new-for-builtins': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md
    'unicorn/regex-shorthand': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
    'unicorn/error-message': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md
    'unicorn/no-unsafe-regex': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md
    'unicorn/prefer-exponentiation-operator': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
    'unicorn/prefer-includes': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md
    'unicorn/prefer-node-remove': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-text-content.md
    'unicorn/prefer-text-content': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-event-key.md
    'unicorn/prefer-event-key': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-flat-map.md
    'unicorn/prefer-flat-map': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-keyword-prefix.md
    'unicorn/no-keyword-prefix': [
      'error',
      {
        blacklist: ['new'],
        checkProperties: true,
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': 'off',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md
     * Disabled in favour of ESLint's rule
     * https://eslint.org/docs/rules/no-nested-ternary
     */
    'unicorn/no-nested-ternary': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dataset.md
    'unicorn/prefer-dataset': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-reflect-apply.md
    'unicorn/prefer-reflect-apply': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice': 'error',
  },

};
