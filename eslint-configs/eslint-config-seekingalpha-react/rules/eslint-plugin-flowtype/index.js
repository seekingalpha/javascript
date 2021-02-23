module.exports = {

  parser: 'babel-eslint',

  plugins: ['flowtype'],

  rules: {

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-complex-type
    'flowtype/array-style-complex-type': [
      'error',
      'verbose',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-simple-type
    'flowtype/array-style-simple-type': [
      'error',
      'verbose',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
    'flowtype/boolean-style': [
      'error',
      'boolean',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
    'flowtype/define-flow-type': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
    'flowtype/delimiter-dangle': [
      'error',
      'always-multiline',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
    'flowtype/generic-spacing': [
      'error',
      'never',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-newline-after-flow-annotation
    'flowtype/newline-after-flow-annotation': [
      'error',
      'always',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-dupe-keys
    'flowtype/no-dupe-keys': 'error',

    /*
     * https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-existential-type
     * should be disabled to support recompose flow types
     */
    'flowtype/no-existential-type': 'off',

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

    /*
     * TODO: enable after standart multiline object notation added
     * https://github.com/gajus/eslint-plugin-flowtype#object-type-curly-spacing
     */
    'flowtype/object-type-curly-spacing': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-object-type-delimiter
    'flowtype/object-type-delimiter': [
      'error',
      'comma',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-parameter-type
    'flowtype/require-parameter-type': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
    'flowtype/require-return-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-types-at-top
    'flowtype/require-types-at-top': [
      'error',
      'always',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-types-at-top
    'flowtype/require-valid-file-annotation': [
      'error',
      'always',
      {
        annotationStyle: 'line',
      },
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-variable-type
    'flowtype/require-variable-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-semi
    'flowtype/semi': [
      'error',
      'always',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
    'flowtype/space-after-type-colon': [
      'error',
      'always',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-generic-bracket
    'flowtype/space-before-generic-bracket': [
      'error',
      'never',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-type-colon
    'flowtype/space-before-type-colon': [
      'error',
      'never',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-id-match
    'flowtype/type-id-match': [
      'error',
      '^([A-Z][a-z0-9]*)+T$',
    ],


    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-import-style
    'flowtype/type-import-style': [
      'error',
      'declaration',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-union-intersection-spacing
    'flowtype/union-intersection-spacing': [
      'error',
      'always',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
    'flowtype/use-flow-type': 'warn',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-compound-type-alias
    'flowtype/require-compound-type-alias': [
      'error',
      'never',
    ],

    /*
     * TODO enable?
     * https://github.com/gajus/eslint-plugin-flowtype#require-exact-type
     */
    'flowtype/require-exact-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#sort-keys
    'flowtype/sort-keys': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#no-mixed
    'flowtype/no-mixed': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-spread-exact-type
    'flowtype/spread-exact-type': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-readonly-react-props
    'flowtype/require-readonly-react-props': 'error',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-inexact-type
    'flowtype/require-inexact-type': 'off',

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-arrow-parens
    'flowtype/arrow-parens': [
      'error',
      'always',
    ],

    // https://github.com/gajus/eslint-plugin-flowtype#require-indexer-name
    'flowtype/require-indexer-name': [
      'error',
      'never',
    ],

  },

  settings: {

    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },

  },

};
