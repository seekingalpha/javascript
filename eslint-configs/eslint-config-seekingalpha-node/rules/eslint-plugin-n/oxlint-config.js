export default {
  plugins: ['node'],
  rules: {
    'node/callback-return': 'off',
    'node/global-require': 'off',
    'node/handle-callback-err': 'off',
    'node/no-exports-assign': 'off',
    'node/no-mixed-requires': 'error',
    'node/no-new-require': 'off',
    'node/no-path-concat': 'error',
    'node/no-process-env': 'error',
    'node/no-sync': 'error',
    'node/no-top-level-await': 'off',
  },
};
