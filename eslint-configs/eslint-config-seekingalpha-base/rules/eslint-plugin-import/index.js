// eslint-plugin-import rules (https://github.com/benmosher/eslint-plugin-import)

module.exports = {

  extends: [
    './static-analysis.js',
    './helpful-warnings.js',
    './module-systems.js',
  ],

  plugins: ['import'],

  settings: {

    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
        ],
      },
    },

    'import/extensions': [
      '.js',
      '.jsx',
    ],

    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(scss|css|less|hbs|svg|json)$',
    ],

  },

};