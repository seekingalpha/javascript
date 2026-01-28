import { defineConfig } from 'eslint/config';
import baseConfig from 'eslint-config-seekingalpha-base/oxc.js';
import nodeConfig from 'eslint-config-seekingalpha-node';

export default defineConfig([
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
  },
  {
    languageOptions: {
      sourceType: 'module',
    },
    plugins: {
      ...baseConfig.plugins,
      ...nodeConfig.plugins,
    },
    rules: {
      ...baseConfig.rules,
      ...nodeConfig.rules,
      'import/no-unresolved': 'off',
      'n/file-extension-in-import': 'off',
      'n/no-missing-import': 'off',
    },
    settings: baseConfig.settings,
  },
]);
