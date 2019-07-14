// https://github.com/alecxe/eslint-plugin-protractor#locating-elements

const MAX_SELECTORS_DEPTH = 3;

module.exports = {

  rules: {

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-invalid-selectors.md
    'protractor/no-invalid-selectors': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/valid-locator-type.md
    'protractor/valid-locator-type': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-compound-classes.md
    'protractor/no-compound-classes': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-angular-classes.md
    'protractor/no-angular-classes': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/use-angular-locators.md
    'protractor/use-angular-locators': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-angular-attributes.md
    'protractor/no-angular-attributes': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-bootstrap-classes.md
    'protractor/no-bootstrap-classes': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/use-simple-repeaters.md
    'protractor/use-simple-repeaters': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-repetitive-locators.md
    'protractor/no-repetitive-locators': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/no-repetitive-selectors.md
    'protractor/no-repetitive-selectors': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/valid-by-id.md
    'protractor/valid-by-id': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/valid-by-tagname.md
    'protractor/valid-by-tagname': 'error',

    // https://github.com/alecxe/eslint-plugin-protractor/blob/master/docs/rules/limit-selector-depth.md
    'protractor/limit-selector-depth': [
      'error',
      MAX_SELECTORS_DEPTH,
    ],
  },

};
