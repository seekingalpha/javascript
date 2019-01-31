module.exports = {

  extends: [

    // https://github.com/yannickcr/eslint-plugin-react
    './rules/eslint/index.js',

    // https://github.com/yannickcr/eslint-plugin-react
    './rules/eslint-plugin-react/index.js',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    './rules/eslint-plugin-jsx-a11y/index.js',

    // https://github.com/gajus/eslint-plugin-flowtype
    './rules/eslint-plugin-flowtype/index.js',

    // https://github.com/jest-community/eslint-plugin-jest
    './rules/eslint-plugin-jest/index.js',

  ],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
      jsx: true,
    },
  },

};