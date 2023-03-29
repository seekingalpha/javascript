module.exports = {
  extends: [
    // https://github.com/mysticatea/eslint-plugin-node
    './rules/eslint-plugin-node/index.js',
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
