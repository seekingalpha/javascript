module.exports = {

  parser: 'babel-eslint',

  plugins: ['flowtype'],

  rules: {

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-complex-type
    'flowtype/array-style-complex-type': [
      'error',
      'verbose'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-simple-type
    'flowtype/array-style-simple-type': [
      'error',
      'verbose'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
    'flowtype/boolean-style': [
      'error',
      'boolean'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
    'flowtype/define-flow-type': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
    'flowtype/delimiter-dangle': [
      'error',
      'never'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
    'flowtype/generic-spacing': [
      'error',
      'never'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-newline-after-flow-annotation
    'flowtype/newline-after-flow-annotation': [
      'error',
      'always'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-dupe-keys
    'flowtype/no-dupe-keys': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-existential-type
    'flowtype/no-existential-type': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-flow-fix-me-comments
    'flowtype/no-flow-fix-me-comments': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-mutable-array
    'flowtype/no-mutable-array': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-primitive-constructor-types
    'flowtype/no-primitive-constructor-types': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-types-missing-file-annotation
    'flowtype/no-types-missing-file-annotation': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-unused-expressions
    'flowtype/no-unused-expressions': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-weak-types
    'flowtype/no-weak-types': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-object-type-delimiter
    'flowtype/object-type-delimiter': [
      'error',
      'comma'
    ],

    /*
     * TODO enable?
     * https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-exact-type
     *'flowtype/require-exact-type': [
     *'error',
     *'always'
     *],
     */

    /*
     * TODO enable?
     * https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type
     */
    'flowtype/require-parameter-type': 'off',

    /*
     * TODO enable?
     * https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
     */
    'flowtype/require-return-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-types-at-top
    'flowtype/require-types-at-top': [
      'error',
      'always'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-types-at-top
    'flowtype/require-valid-file-annotation': [
      'error',
      'always',
      {
        annotationStyle: 'line'
      }
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-variable-type
    'flowtype/require-variable-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-semi
    'flowtype/semi': [
      'error',
      'always'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
    'flowtype/space-after-type-colon': [
      'error',
      'always'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-generic-bracket
    'flowtype/space-before-generic-bracket': [
      'error',
      'never'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-type-colon
    'flowtype/space-before-type-colon': [
      'error',
      'never'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-id-match
    'flowtype/type-id-match': 'off',

    /*
     * TODO enable?
     * https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-import-style
     */
    'flowtype/type-import-style': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-union-intersection-spacing
    'flowtype/union-intersection-spacing': [
      'error',
      'always'
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
    'flowtype/use-flow-type': 'warn'

  },

  settings: {

    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }

  }

};