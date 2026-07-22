import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default {
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-dom-traversing.md
    'unicorn/better-dom-traversing': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err',
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/class-reference-in-static-methods.md
    'unicorn/class-reference-in-static-methods': [
      'error',
      { preferThis: true },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/comment-content.md
    'unicorn/comment-content': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-assert.md
    'unicorn/consistent-assert': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-boolean-name.md
    'unicorn/consistent-boolean-name': 'off',

    // prefer @typescript-eslint/member-ordering
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-class-member-order.md
    'unicorn/consistent-class-member-order': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-compound-words.md
    'unicorn/consistent-compound-words': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-conditional-object-spread.md
    'unicorn/consistent-conditional-object-spread': ['error', 'logical'],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-date-clone.md
    'unicorn/consistent-date-clone': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-destructuring.md
    'unicorn/consistent-destructuring': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-empty-array-spread.md
    'unicorn/consistent-empty-array-spread': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-existence-index-check.md
    'unicorn/consistent-existence-index-check': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-export-decorator-position.md
    'unicorn/consistent-export-decorator-position': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': 'error',

    // prefer func-style
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-style.md
    'unicorn/consistent-function-style': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-json-file-read.md
    'unicorn/consistent-json-file-read': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-optional-chaining.md
    'unicorn/consistent-optional-chaining': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-template-literal-escape.md
    'unicorn/consistent-template-literal-escape': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-tuple-labels.md
    'unicorn/consistent-tuple-labels': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
    'unicorn/custom-error-definition': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/default-export-style.md
    'unicorn/default-export-style': [
      'error',
      { classes: 'separate', functions: 'separate' },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-dataset.md
    'unicorn/dom-node-dataset': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/empty-brace-spaces.md
     * Disabled to work with oxfmt
     */
    'unicorn/empty-brace-spaces': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
    'unicorn/error-message': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
    'unicorn/escape-case': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
    'unicorn/explicit-length-check': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/explicit-timer-delay.md
    'unicorn/explicit-timer-delay': ['error', 'always'],

    /*
     * check if can replace plugin-filenames
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
     */
    'unicorn/filename-case': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/id-match.md
    'unicorn/id-match': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
    'unicorn/import-style': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/isolated-functions.md
    'unicorn/isolated-functions': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/logical-assignment-operators.md
    'unicorn/logical-assignment-operators': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/max-nested-calls.md
    'unicorn/max-nested-calls': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/name-replacements.md
    'unicorn/name-replacements': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
    'unicorn/new-for-builtins': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
    'unicorn/no-abusive-eslint-disable': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accessor-recursion.md
    'unicorn/no-accessor-recursion': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-accidental-bitwise-operator.md
    'unicorn/no-accidental-bitwise-operator': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-anonymous-default-export.md
     * Duplicates import/no-anonymous-default-export
     */
    'unicorn/no-anonymous-default-export': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-callback-reference.md
    'unicorn/no-array-callback-reference': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-concat-in-loop.md
    'unicorn/no-array-concat-in-loop': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-fill-with-reference-type.md
    'unicorn/no-array-fill-with-reference-type': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
    'unicorn/no-array-for-each': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-from-fill.md
    'unicorn/no-array-from-fill': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-front-mutation.md
    'unicorn/no-array-front-mutation': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
    'unicorn/no-array-method-this-argument': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-reduce.md
    'unicorn/no-array-reduce': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reverse.md
    'unicorn/no-array-reverse': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort.md
    'unicorn/no-array-sort': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-sort-for-min-max.md
    'unicorn/no-array-sort-for-min-max': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-splice.md
    'unicorn/no-array-splice': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-asterisk-prefix-in-documentation-comments.md
    'unicorn/no-asterisk-prefix-in-documentation-comments': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-async-promise-finally.md
    'unicorn/no-async-promise-finally': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
    'unicorn/no-await-expression-member': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-in-promise-methods.md
    'unicorn/no-await-in-promise-methods': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-blob-to-file.md
    'unicorn/no-blob-to-file': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-boolean-sort-comparator.md
    'unicorn/no-boolean-sort-comparator': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-break-in-nested-loop.md
    'unicorn/no-break-in-nested-loop': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-canvas-to-image.md
    'unicorn/no-canvas-to-image': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-chained-comparison.md
    'unicorn/no-chained-comparison': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-collection-bracket-access.md
    'unicorn/no-collection-bracket-access': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-computed-property-existence-check.md
    'unicorn/no-computed-property-existence-check': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-splice.md
    'unicorn/no-confusing-array-splice': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-with.md
    'unicorn/no-confusing-array-with': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-constant-zero-expression.md
    'unicorn/no-constant-zero-expression': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-declarations-before-early-exit.md
    'unicorn/no-declarations-before-early-exit': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-document-cookie.md
    'unicorn/no-document-cookie': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-double-comparison.md
    'unicorn/no-double-comparison': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-if-branches.md
    'unicorn/no-duplicate-if-branches': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-logical-operands.md
    'unicorn/no-duplicate-logical-operands': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-loops.md
    'unicorn/no-duplicate-loops': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-duplicate-set-values.md
    'unicorn/no-duplicate-set-values': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-empty-file.md
    'unicorn/no-empty-file': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-error-property-assignment.md
    'unicorn/no-error-property-assignment': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-exports-in-scripts.md
    'unicorn/no-exports-in-scripts': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-global-object-property-assignment.md
    'unicorn/no-global-object-property-assignment': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
    'unicorn/no-hex-escape': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-immediate-mutation.md
    'unicorn/no-immediate-mutation': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-impossible-length-comparison.md
    'unicorn/no-impossible-length-comparison': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-incorrect-query-selector.md
    'unicorn/no-incorrect-query-selector': 'error',

    // we use custom templates for API calls
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-incorrect-template-string-interpolation.md
    'unicorn/no-incorrect-template-string-interpolation': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-instanceof-array.md
    'unicorn/no-instanceof-array': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-instanceof-builtins.md
    'unicorn/no-instanceof-builtins': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-argument-count.md
    'unicorn/no-invalid-argument-count': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-character-comparison.md
    'unicorn/no-invalid-character-comparison': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md
    'unicorn/no-invalid-fetch-options': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-file-input-accept.md
    'unicorn/no-invalid-file-input-accept': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-remove-event-listener.md
    'unicorn/no-invalid-remove-event-listener': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-well-known-symbol-methods.md
    'unicorn/no-invalid-well-known-symbol-methods': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-keyword-prefix.md
    'unicorn/no-keyword-prefix': [
      'error',
      {
        disallowedPrefixes: ['new'],
        checkProperties: true,
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-late-current-target-access.md
    'unicorn/no-late-current-target-access': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-late-event-control.md
    'unicorn/no-late-event-control': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-lonely-if.md
    'unicorn/no-lonely-if': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-loop-iterable-mutation.md
    'unicorn/no-loop-iterable-mutation': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-magic-array-flat-depth.md
    'unicorn/no-magic-array-flat-depth': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-manually-wrapped-comments.md
    'unicorn/no-manually-wrapped-comments': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-mismatched-map-key.md
    'unicorn/no-mismatched-map-key': 'error',

    // oxlint-disable-next-line @cspell/spellchecker
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-misrefactored-assignment.md
    'unicorn/no-misrefactored-assignment': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-missing-local-resource.md
    'unicorn/no-missing-local-resource': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-multiple-promise-resolver-calls.md
    'unicorn/no-multiple-promise-resolver-calls': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-named-default.md
    'unicorn/no-named-default': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-array-predicate.md
    'unicorn/no-negated-array-predicate': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-comparison.md
    'unicorn/no-negated-comparison': 'error',

    /*
     * Disabled in favour of native ESLint no-negated-condition rule
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negated-condition.md
     */
    'unicorn/no-negated-condition': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-negation-in-equality-check.md
    'unicorn/no-negation-in-equality-check': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-nested-ternary.md
     * Disabled in favour of ESLint's rule and it does not work with Prettier
     * https://eslint.org/docs/rules/no-nested-ternary
     */
    'unicorn/no-nested-ternary': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-array.md
    'unicorn/no-new-array': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
    'unicorn/no-new-buffer': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-non-function-verb-prefix.md
    'unicorn/no-non-function-verb-prefix': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nonstandard-builtin-properties.md
    'unicorn/no-nonstandard-builtin-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    'unicorn/no-null': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-as-default-parameter.md
    'unicorn/no-object-as-default-parameter': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-object-methods-with-collections.md
    'unicorn/no-object-methods-with-collections': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-optional-chaining-on-undeclared-variable.md
    'unicorn/no-optional-chaining-on-undeclared-variable': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
    'unicorn/no-process-exit': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-redundant-comparison.md
    'unicorn/no-redundant-comparison': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-return-array-push.md
    'unicorn/no-return-array-push': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-selector-as-dom-name.md
    'unicorn/no-selector-as-dom-name': 'error',

    // handled by stylelint
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-shorthand-property-overrides.md
    'unicorn/no-shorthand-property-overrides': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-single-promise-in-promise-methods.md
    'unicorn/no-single-promise-in-promise-methods': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
    'unicorn/no-static-only-class': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-subtraction-comparison.md
    'unicorn/no-subtraction-comparison': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-thenable.md
    'unicorn/no-thenable': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
    'unicorn/no-this-assignment': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-outside-of-class.md
    'unicorn/no-this-outside-of-class': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-top-level-assignment-in-function.md
    'unicorn/no-top-level-assignment-in-function': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-top-level-side-effects.md
    'unicorn/no-top-level-side-effects': 'error',

    // handled by stylelint
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-transition-all.md
    'unicorn/no-transition-all': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-typeof-undefined.md
    'unicorn/no-typeof-undefined': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-uncalled-method.md
    'unicorn/no-uncalled-method': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-undeclared-class-members.md
    'unicorn/no-undeclared-class-members': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-flat-depth.md
    'unicorn/no-unnecessary-array-flat-depth': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-array-splice-count.md
    'unicorn/no-unnecessary-array-splice-count': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-await.md
    'unicorn/no-unnecessary-await': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-boolean-comparison.md
    'unicorn/no-unnecessary-boolean-comparison': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-fetch-options.md
    'unicorn/no-unnecessary-fetch-options': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-global-this.md
    'unicorn/no-unnecessary-global-this': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-nested-ternary.md
    'unicorn/no-unnecessary-nested-ternary': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md
    'unicorn/no-unnecessary-polyfills': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-slice-end.md
    'unicorn/no-unnecessary-slice-end': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-splice.md
    'unicorn/no-unnecessary-splice': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-string-trim.md
    'unicorn/no-unnecessary-string-trim': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-for-of-expression.md
    'unicorn/no-unreadable-for-of-expression': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-iife.md
    'unicorn/no-unreadable-iife': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-new-expression.md
    'unicorn/no-unreadable-new-expression': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unreadable-object-destructuring.md
    'unicorn/no-unreadable-object-destructuring': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-buffer-conversion.md
    'unicorn/no-unsafe-buffer-conversion': 'off',

    // does not support older browsers
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-dom-html.md
    'unicorn/no-unsafe-dom-html': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-promise-all-settled-values.md
    'unicorn/no-unsafe-promise-all-settled-values': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-property-key.md
    'unicorn/no-unsafe-property-key': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-string-replacement.md
    'unicorn/no-unsafe-string-replacement': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-array-method-return.md
    'unicorn/no-unused-array-method-return': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
    'unicorn/no-unused-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-boolean-cast.md
    'unicorn/no-useless-boolean-cast': 'error',

    // conflict with translation String()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-coercion.md
    'unicorn/no-useless-coercion': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-collection-argument.md
    'unicorn/no-useless-collection-argument': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-compound-assignment.md
    'unicorn/no-useless-compound-assignment': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-concat.md
    'unicorn/no-useless-concat': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-continue.md
    'unicorn/no-useless-continue': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-delete-check.md
    'unicorn/no-useless-delete-check': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-else.md
    'unicorn/no-useless-else': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-error-capture-stack-trace.md
    'unicorn/no-useless-error-capture-stack-trace': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-fallback-in-spread.md
    'unicorn/no-useless-fallback-in-spread': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-iterator-to-array.md
    'unicorn/no-useless-iterator-to-array': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
    'unicorn/no-useless-length-check': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-logical-operand.md
    'unicorn/no-useless-logical-operand': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-override.md
    'unicorn/no-useless-override': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-promise-resolve-reject.md
    'unicorn/no-useless-promise-resolve-reject': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-re-export.md
    'unicorn/no-useless-re-export': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-recursion.md
    'unicorn/no-useless-recursion': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
    'unicorn/no-useless-spread': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-switch-case.md
    'unicorn/no-useless-switch-case': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-template-literals.md
    'unicorn/no-useless-template-literals': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-xor-as-exponentiation.md
    'unicorn/no-xor-as-exponentiation': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
     * Disabled to work with Prettier
     */
    'unicorn/number-literal-case': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/numeric-separators-style.md
    'unicorn/numeric-separators-style': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/operator-assignment.md
    'unicorn/operator-assignment': ['error', 'never'],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-abort-signal-any.md
    'unicorn/prefer-abort-signal-any': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-abort-signal-timeout.md
    'unicorn/prefer-abort-signal-timeout': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-add-event-listener-options.md
    'unicorn/prefer-add-event-listener-options': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-aggregate-error.md
    'unicorn/prefer-aggregate-error': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-find.md
    'unicorn/prefer-array-find': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
    'unicorn/prefer-array-flat': [
      'error',
      {
        functions: ['flatDeep'],
      },
    ],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-flat-map.md
    'unicorn/prefer-array-flat-map': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-async.md
    'unicorn/prefer-array-from-async': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-map.md
    'unicorn/prefer-array-from-map': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-from-range.md
    'unicorn/prefer-array-from-range': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-index-of.md
    'unicorn/prefer-array-index-of': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-iterable-methods.md
    'unicorn/prefer-array-iterable-methods': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-last-methods.md
    'unicorn/prefer-array-last-methods': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-slice.md
    'unicorn/prefer-array-slice': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-some.md
    'unicorn/prefer-array-some': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
    'unicorn/prefer-at': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-await.md
    'unicorn/prefer-await': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-bigint-literals.md
    'unicorn/prefer-bigint-literals': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-blob-reading-methods.md
    'unicorn/prefer-blob-reading-methods': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-block-statement-over-iife.md
    'unicorn/prefer-block-statement-over-iife': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-boolean-return.md
    'unicorn/prefer-boolean-return': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-class-fields.md
    'unicorn/prefer-class-fields': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-classlist-toggle.md
    'unicorn/prefer-classlist-toggle': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-code-point.md
    'unicorn/prefer-code-point': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-continue.md
    'unicorn/prefer-continue': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-date-now.md
    'unicorn/prefer-date-now': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-default-parameters.md
    'unicorn/prefer-default-parameters': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-direct-iteration.md
    'unicorn/prefer-direct-iteration': 'off',

    // only stage 4
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dispose.md
    'unicorn/prefer-dispose': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-append.md
    'unicorn/prefer-dom-node-append': 'error',

    // does not support older browsers
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-html-methods.md
    'unicorn/prefer-dom-node-html-methods': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-remove.md
    'unicorn/prefer-dom-node-remove': 'error',

    // low browser support
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-dom-node-replace-children.md
    'unicorn/prefer-dom-node-replace-children': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-dom-node-text-content.md
    'unicorn/prefer-dom-node-text-content': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-early-return.md
    'unicorn/prefer-early-return': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-else-if.md
    'unicorn/prefer-else-if': 'off',

    // low browser support
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-error-is-error.md
    'unicorn/prefer-error-is-error': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-event-target.md
    'unicorn/prefer-event-target': 'error',

    // handled by stylelint
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-explicit-viewport-units.md
    'unicorn/prefer-explicit-viewport-units': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-export-from.md
    'unicorn/prefer-export-from': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-flat-math-min-max.md
    'unicorn/prefer-flat-math-min-max': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-get-or-insert-computed.md
    'unicorn/prefer-get-or-insert-computed': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-number-constants.md
    'unicorn/prefer-global-number-constants': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-global-this.md
    'unicorn/prefer-global-this': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-group-by.md
    'unicorn/prefer-group-by': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-has-check.md
    'unicorn/prefer-has-check': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-hoisting-branch-code.md
    'unicorn/prefer-hoisting-branch-code': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-https.md
    'unicorn/prefer-https': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-identifier-import-export-specifiers.md
    'unicorn/prefer-identifier-import-export-specifiers': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-import-meta-properties.md
    'unicorn/prefer-import-meta-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
    'unicorn/prefer-includes': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes-over-repeated-comparisons.md
    'unicorn/prefer-includes-over-repeated-comparisons': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterable-in-constructor.md
    'unicorn/prefer-iterable-in-constructor': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-concat.md
    'unicorn/prefer-iterator-concat': 'off',

    // not yet supported by TS
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-helpers.md
    'unicorn/prefer-iterator-helpers': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-to-array.md
    'unicorn/prefer-iterator-to-array': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-iterator-to-array-at-end.md
    'unicorn/prefer-iterator-to-array-at-end': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-json-parse-buffer.md
    'unicorn/prefer-json-parse-buffer': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-keyboard-event-key.md
    'unicorn/prefer-keyboard-event-key': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-location-assign.md
    'unicorn/prefer-location-assign': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-logical-operator-over-ternary.md
    'unicorn/prefer-logical-operator-over-ternary': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-map-from-entries.md
    'unicorn/prefer-map-from-entries': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-abs.md
    'unicorn/prefer-math-abs': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-constants.md
    'unicorn/prefer-math-constants': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-math-min-max.md
    'unicorn/prefer-math-min-max': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-math-trunc.md
    'unicorn/prefer-math-trunc': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-minimal-ternary.md
    'unicorn/prefer-minimal-ternary': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md
    'unicorn/prefer-modern-dom-apis': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-modern-math-apis.md
    'unicorn/prefer-modern-math-apis': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
    'unicorn/prefer-module': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-native-coercion-functions.md
    'unicorn/prefer-native-coercion-functions': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
    'unicorn/prefer-negative-index': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
    'unicorn/prefer-node-protocol': 'error',

    // enable
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-coercion.md
    'unicorn/prefer-number-coercion': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-number-is-safe-integer.md
    'unicorn/prefer-number-is-safe-integer': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-number-properties.md
    'unicorn/prefer-number-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-define-properties.md
    'unicorn/prefer-object-define-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-destructuring-defaults.md
    'unicorn/prefer-object-destructuring-defaults': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
    'unicorn/prefer-object-from-entries': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-iterable-methods.md
    'unicorn/prefer-object-iterable-methods': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-observer-apis.md
    'unicorn/prefer-observer-apis': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md
    'unicorn/prefer-optional-catch-binding': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-path2d.md
    'unicorn/prefer-path2d': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-private-class-fields.md
    'unicorn/prefer-private-class-fields': 'error',

    // enable. Need to wait for support
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-promise-try.md
    'unicorn/prefer-promise-try': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-promise-with-resolvers.md
    'unicorn/prefer-promise-with-resolvers': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
    'unicorn/prefer-prototype-methods': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-queue-microtask.md
    'unicorn/prefer-queue-microtask': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-reflect-apply.md
    'unicorn/prefer-reflect-apply': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-escape.md
    'unicorn/prefer-regexp-escape': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-regexp-test.md
    'unicorn/prefer-regexp-test': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-response-static-json.md
    'unicorn/prefer-response-static-json': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-scoped-selector.md
    'unicorn/prefer-scoped-selector': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-set-has.md
    'unicorn/prefer-set-has': 'error',

    // enable. Need to wait for support
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-methods.md
    'unicorn/prefer-set-methods': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-set-size.md
    'unicorn/prefer-set-size': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-short-arrow-method.md
    'unicorn/prefer-short-arrow-method': 'off',

    // waiting for autofix
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-condition-first.md
    'unicorn/prefer-simple-condition-first': 'off',

    // enable
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-sort-comparator.md
    'unicorn/prefer-simple-sort-comparator': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simplified-conditions.md
    'unicorn/prefer-simplified-conditions': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-array-predicate.md
    'unicorn/prefer-single-array-predicate': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-call.md
    'unicorn/prefer-single-call': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-object-destructuring.md
    'unicorn/prefer-single-object-destructuring': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-single-replace.md
    'unicorn/prefer-single-replace': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-smaller-scope.md
    'unicorn/prefer-smaller-scope': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-split-limit.md
    'unicorn/prefer-split-limit': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-match-all.md
    'unicorn/prefer-string-match-all': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-pad-start-end.md
    'unicorn/prefer-string-pad-start-end': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-raw.md
    'unicorn/prefer-string-raw': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-repeat.md
    'unicorn/prefer-string-repeat': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
    'unicorn/prefer-string-replace-all': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-starts-ends-with.md
    'unicorn/prefer-string-starts-ends-with': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-trim-start-end.md
    'unicorn/prefer-string-trim-start-end': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md
    'unicorn/prefer-structured-clone': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
    'unicorn/prefer-switch': 'error',

    // waiting for support
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-temporal.md
    'unicorn/prefer-temporal': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-ternary.md
    'unicorn/prefer-ternary': 'error',

    // handled by oxlint promise plugin
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-then-catch.md
    'unicorn/prefer-then-catch': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-toggle-attribute.md
    'unicorn/prefer-toggle-attribute': 'error',

    /*
     * https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
     * low browser support
     */
    'unicorn/prefer-top-level-await': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
    'unicorn/prefer-type-error': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-type-literal-last.md
    'unicorn/prefer-type-literal-last': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-uint8array-base64.md
    'unicorn/prefer-uint8array-base64': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-unary-minus.md
    'unicorn/prefer-unary-minus': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-unicode-code-point-escapes.md
    'unicorn/prefer-unicode-code-point-escapes': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-can-parse.md
    'unicorn/prefer-url-can-parse': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-href.md
    'unicorn/prefer-url-href': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-url-search-parameters.md
    'unicorn/prefer-url-search-parameters': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-while-loop-condition.md
    'unicorn/prefer-while-loop-condition': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/relative-url-style.md
    'unicorn/relative-url-style': ['error', 'never'],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
    'unicorn/require-array-join-separator': 'error',

    // enable
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-sort-compare.md
    'unicorn/require-array-sort-compare': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-css-escape.md
    'unicorn/require-css-escape': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-frontmatter-fields.md
    'unicorn/require-frontmatter-fields': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-attributes.md
    'unicorn/require-module-attributes': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-module-specifiers.md
    'unicorn/require-module-specifiers': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-passive-events.md
    'unicorn/require-passive-events': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-post-message-target-origin.md
    'unicorn/require-post-message-target-origin': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-proxy-trap-boolean-return.md
    'unicorn/require-proxy-trap-boolean-return': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/string-content.md
    'unicorn/string-content': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
    'unicorn/switch-case-braces': ['error', 'always'],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-break-position.md
    'unicorn/switch-case-break-position': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
    'unicorn/template-indent': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/text-encoding-identifier-case.md
    'unicorn/text-encoding-identifier-case': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
    'unicorn/throw-new-error': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/try-complexity.md
    'unicorn/try-complexity': 'off',
  },
};
