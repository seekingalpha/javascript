module.exports = {

  parser: 'babel-eslint',

  extends: [
    // https://www.npmjs.com/package/eslint-config-seekingalpha-base
    'seekingalpha-base',

    // https://github.com/mysticatea/eslint-plugin-node
    './rules/eslint-plugin-node/index.js',
  ],

  env: {
    browser: false,
    node: true
  }

};