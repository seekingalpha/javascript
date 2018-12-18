// eslint-plugin-import rules (https://github.com/benmosher/eslint-plugin-import)

module.exports = {

  extends: [
    './helpful-warnings.js',
    './module-systems.js',
    './static-analysis.js',
    './style-guide.js',
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