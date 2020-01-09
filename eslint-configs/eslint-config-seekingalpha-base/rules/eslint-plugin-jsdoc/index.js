// https://github.com/gajus/eslint-plugin-jsdoc

module.exports = {

  plugins: ['jsdoc'],

  rules: {

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-param-names.md
    'jsdoc/check-param-names': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-tag-names.md
    'jsdoc/check-tag-names': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/check-types.md
    'jsdoc/check-types': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/newline-after-description.md
    'jsdoc/newline-after-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/no-undefined-types.md
    'jsdoc/no-undefined-types': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-description-complete-sentence.md
    'jsdoc/require-description-complete-sentence': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-example.md
    'jsdoc/require-example': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc
    'jsdoc/check-examples': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-hyphen-before-param-description.md
    'jsdoc/require-hyphen-before-param-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param.md
    'jsdoc/require-param': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param-description.md
    'jsdoc/require-param-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param-name.md
    'jsdoc/require-param-name': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-param-type.md
    'jsdoc/require-param-type': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-returns.md
    'jsdoc/require-returns': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-returns-description.md
    'jsdoc/require-returns-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/require-returns-type.md
    'jsdoc/require-returns-type': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc/blob/master/.README/rules/valid-types.md
    'jsdoc/valid-types': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc
    'jsdoc/require-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check
    'jsdoc/require-returns-check': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
    'jsdoc/check-alignment': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-indentation
    'jsdoc/check-indentation': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-syntax
    'jsdoc/check-syntax': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-implements-on-classes
    'jsdoc/implements-on-classes': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#match-description
    'jsdoc/match-description': [
      'error', {
        tags: {
          param: true,
          returns: true,
        },
      },
    ],

    /*
     * https://github.com/gajus/eslint-plugin-jsdoc#no-types
     * we use Flow
     */
    'jsdoc/no-types': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-jsdoc
    'jsdoc/require-jsdoc': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-access
    'jsdoc/check-access': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#check-values
    'jsdoc/check-values': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags
    'jsdoc/empty-tags': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-property-names
    'jsdoc/check-property-names': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview
    'jsdoc/require-file-overview': 'off',

    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property
    'jsdoc/require-property': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-property-description
    'jsdoc/require-property-description': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-property-name
    'jsdoc/require-property-name': 'error',

    // https://github.com/gajus/eslint-plugin-jsdoc#require-property-type
    'jsdoc/require-property-type': 'error',
  },

};
