module.exports = {

  extends: [

    // https://github.com/lo1tuma/eslint-plugin-mocha
    './rules/eslint-plugin-mocha/index.js',

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
