// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {

  plugins: ['unicorn'],

  rules: {

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/better-regex.md
    'unicorn/better-regex': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err',
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-destructuring.md
    'unicorn/consistent-destructuring': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
    'unicorn/custom-error-definition': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/empty-brace-spaces.md
    'unicorn/empty-brace-spaces': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
    'unicorn/error-message': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
    'unicorn/escape-case': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
    'unicorn/explicit-length-check': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
    'unicorn/import-index': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
    'unicorn/import-style': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
    'unicorn/new-for-builtins': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
    'unicorn/no-abusive-eslint-disable': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-callback-reference.md
    'unicorn/no-array-callback-reference': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
    'unicorn/no-array-for-each': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
    'unicorn/no-array-push-push': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-reduce.md
    'unicorn/no-array-reduce': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
    'unicorn/no-hex-escape': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-instanceof-array.md
    'unicorn/no-instanceof-array': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-keyword-prefix.md
    'unicorn/no-keyword-prefix': [
      'error',
      {
        blacklist: ['new'],
        checkProperties: true,
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-lonely-if.md
    'unicorn/no-lonely-if': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md
     * Disabled in favour of ESLint's rule
     * https://eslint.org/docs/rules/no-nested-ternary
     */
    'unicorn/no-nested-ternary': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-array.md
    'unicorn/no-new-array': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
    'unicorn/no-new-buffer': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    'unicorn/no-null': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
    'unicorn/no-object-as-default-parameter': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
     * Already validated by EsLint node rule
     */
    'unicorn/no-process-exit': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
    'unicorn/no-this-assignment': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unsafe-regex.md
    'unicorn/no-unsafe-regex': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
    'unicorn/no-unused-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
    'unicorn/number-literal-case': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/numeric-separators-style.md
    'unicorn/numeric-separators-style': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-find.md
    'unicorn/prefer-array-find': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-flat-map.md
    'unicorn/prefer-array-flat-map': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-some.md
    'unicorn/prefer-array-some': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-index-of.md
    'unicorn/prefer-array-index-of': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-date-now.md
    'unicorn/prefer-date-now': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-default-parameters.md
    'unicorn/prefer-default-parameters': 'error',

    /*
     * Android Browser 50 and Edge 16 does not support it, enable after support for those dropped
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-append.md
     */
    'unicorn/prefer-dom-node-append': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-dataset.md
    'unicorn/prefer-dom-node-dataset': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-remove.md
     * Android 50 does not support Node.remove(). Should be enabled only after IE support is dropped
     */
    'unicorn/prefer-dom-node-remove': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-text-content.md
    'unicorn/prefer-dom-node-text-content': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
    'unicorn/prefer-includes': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-keyboard-event-key.md
    'unicorn/prefer-keyboard-event-key': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-math-trunc.md
    'unicorn/prefer-math-trunc': 'error',

    /*
     * TODO Not supported by Edge 16 and Android Browsers till 80 - Enable after dropping it
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md
     */
    'unicorn/prefer-modern-dom-apis': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
    'unicorn/prefer-negative-index': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-number-properties.md
    'unicorn/prefer-number-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md
    'unicorn/prefer-optional-catch-binding': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-reflect-apply.md
    'unicorn/prefer-reflect-apply': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-regexp-test.md
    'unicorn/prefer-regexp-test': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-set-has.md
    'unicorn/prefer-set-has': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
    'unicorn/prefer-string-replace-all': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-starts-ends-with.md
    'unicorn/prefer-string-starts-ends-with': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-trim-start-end.md
    'unicorn/prefer-string-trim-start-end': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-ternary.md
    'unicorn/prefer-ternary': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
    'unicorn/prefer-type-error': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
    'unicorn/string-content': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
    'unicorn/throw-new-error': 'error',
  },

};
