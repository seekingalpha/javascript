// https://eslint.org/docs/rules/#nodejs-and-commonjs

module.exports = {

  rules: {

    // https://eslint.org/docs/rules/callback-return
    'callback-return': 'error',

    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // https://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'error',

    /*
     * https://eslint.org/docs/rules/no-buffer-constructor
     * https://github.com/nodejs/node/issues/4660
     */
    'no-buffer-constructor': 'error',

    // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': [
      'error',
      {
        allowCall: false,
        grouping: false
      }
    ],

    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    /*
     * https://eslint.org/docs/rules/no-process-env
     * https://stackoverflow.com/questions/5869216/how-to-store-node-js-deployment-settings-configuration-files
     */
    'no-process-env': 'off',

    // https://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': [
      'error',
      {
        paths: []
      }
    ],

    // https://eslint.org/docs/rules/no-sync
    'no-sync': 'off'

  }

};