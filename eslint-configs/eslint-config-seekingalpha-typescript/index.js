module.exports = {
  extends: [
    './rules/disable-recommended-eslint-rules',

    // https://github.com/typescript-eslint/typescript-eslint
    './rules/typescript-eslint/index.js',
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
