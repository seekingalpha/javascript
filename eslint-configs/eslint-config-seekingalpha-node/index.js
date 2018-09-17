module.exports = {

  parser: 'babel-eslint',

  extends: [
    'plugin:node/recommended',

    // https://www.npmjs.com/package/eslint-config-seekingalpha-base
    'seekingalpha-base',

    './rules/eslint/index.js',

    // https://github.com/mysticatea/eslint-plugin-node
    './rules/eslint-plugin-node/index.js'
  ],

  env: {
    browser: false,
    node: true
  }

};