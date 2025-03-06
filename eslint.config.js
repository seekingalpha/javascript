import globals from 'globals';
import baseConfig from 'eslint-config-seekingalpha-base/flat.js';
import nodeConfig from 'eslint-config-seekingalpha-node/flat.js';

export default {
  languageOptions: {
    sourceType: 'module',
    globals: {
      ...globals.node,
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  plugins: {
    ...baseConfig.plugins,
    ...nodeConfig.plugins,
  },
  rules: {
    ...baseConfig.rules,
    ...nodeConfig.rules,
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
    'import/extensions': 'off',
    'n/file-extension-in-import': 'off',
  },
  settings: {
    ...baseConfig.settings,
  },
};
