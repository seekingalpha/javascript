module.exports = {

  extends: [

    './rules/parser-options.js',

    // ESLint rules (https://eslint.org/docs/rules/)
    './rules/eslint/nodejs-and-commonjs.js',

    './rules/eslint-plugin-unicorn/node.js'

  ],

  env: {
    node: true
  }

};