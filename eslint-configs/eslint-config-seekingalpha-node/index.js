module.exports = {
  extends: [
    // https://github.com/mysticatea/eslint-plugin-node
    './rules/eslint-plugin-node/index.js',
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
