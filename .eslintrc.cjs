module.exports = {
  env: {
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint-config-seekingalpha-base',
    'eslint-config-seekingalpha-node',
  ],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
    'import/extensions': 'off',
    'n/file-extension-in-import': 'off',
  }
};
