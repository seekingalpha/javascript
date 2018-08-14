module.exports = {

  parser: 'babel-eslint',

  extends: [

    // https://www.npmjs.com/package/eslint-config-seekingalpha-base
    'seekingalpha-base',

    // https://github.com/yannickcr/eslint-plugin-react
    './rules/eslint-plugin-react/index.js',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    './rules/eslint-plugin-jsx-a11y/index.js'
  ],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      jsx: true,
      objectLiteralDuplicateProperties: false
    }
  },

  env: {
    es6: true,
    browser: true
  }

};