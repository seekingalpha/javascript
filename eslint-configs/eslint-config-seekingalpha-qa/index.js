module.exports = {

  extends: [

    // https://github.com/alecxe/eslint-plugin-protractor
    './rules/eslint-plugin-protractor/index.js',
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
