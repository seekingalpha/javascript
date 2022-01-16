module.exports = {

  extends: [

    // https://github.com/jest-community/eslint-plugin-jest
    './rules/eslint-plugin-jest/index.js',
  ],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
    },
  },

};
