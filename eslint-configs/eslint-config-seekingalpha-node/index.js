module.exports = {
  extends: [
    // https://github.com/eslint-community/eslint-plugin-n
    './rules/eslint-plugin-n/index.js',
  ],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
    },
  },
};
