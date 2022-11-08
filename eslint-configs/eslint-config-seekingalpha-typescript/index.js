module.exports = {

  extends: [

    // https://github.com/typescript-eslint/typescript-eslint
    './rules/typescript-eslint/index.js',

  ],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
    },
  },

  settings: {
    polyfills: ['Promise'],

    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.ts',
          '.tsx',
          '.cts',
          '.mts',
          '.json',
        ],
      },
    },

    'import/extensions': [
      '.js',
      '.ts',
      '.tsx',
      '.cts',
      '.mts',
    ],
  },

};
