module.exports = {
  // https://eslint.org/docs/rules/#layout-formatting

  rules: {
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],

    /*
     * https://eslint.org/docs/rules/unicode-bom
     * disabled to work with prettier
     */
    'unicode-bom': 'off',
  },
};
