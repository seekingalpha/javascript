// https://github.com/alecxe/eslint-plugin-protractor#correct-protractor-api-usage-and-common-errors

module.exports = {

  rules: {

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/missing-perform.md
    'protractor/missing-perform': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/correct-chaining.md
    'protractor/correct-chaining': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-array-finder-methods.md
    'protractor/no-array-finder-methods': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/array-callback-return.md
    'protractor/array-callback-return': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-get-inner-outer-html.md
    'protractor/no-get-inner-outer-html': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-get-raw-id.md
    'protractor/no-get-raw-id': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-get-location-abs-url.md
    'protractor/no-get-location-abs-url': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-promise-in-if.md
    'protractor/no-promise-in-if': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/bare-element-finders.md
    'protractor/bare-element-finders': 'error',
  },

};
