module.exports = {
  rules: {
    /*
     * Disabled as per TS recommendation
     * https://typescript-eslint.io/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
     */
    'no-undef': 'off',

    'class-methods-use-this': 'off',

    'default-param-last': 'off',

    /*
     * Requires TS
     * 'dot-notation': 'off',
     */

    'init-declarations': 'off',

    'max-params': 'off',

    'no-array-constructor': 'off',

    'no-dupe-class-members': 'off',

    'no-empty-function': 'off',

    /*
     * Requires TS
     * 'no-implied-eval': 'off',
     */

    'no-loop-func': 'off',

    'no-magic-numbers': 'off',

    'no-redeclare': 'off',

    'no-restricted-imports': 'off',

    'no-shadow': 'off',

    'no-unused-expressions': 'off',

    'no-unused-vars': 'off',

    'no-use-before-define': 'off',

    'no-useless-constructor': 'off',

    /*
     * Requires TS
     * 'prefer-destructuring': 'off',
     */

    /*
     * Requires TS
     * 'require-await': 'off',
     */

    'no-invalid-this': 'off',
  },
};
