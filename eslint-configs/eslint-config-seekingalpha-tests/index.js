module.exports = {
  extends: [
    // https://github.com/jest-community/eslint-plugin-jest
    './rules/eslint-plugin-jest/index.js',

    // https://github.com/jest-community/eslint-plugin-jest
    './rules/eslint-plugin-testing-library/index.js',
  ],

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
    },
  },
};
