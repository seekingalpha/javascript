import { defineConfig } from 'eslint/config';
import baseConfig from 'eslint-config-seekingalpha-base';
import nodeConfig from 'eslint-config-seekingalpha-node';

export default defineConfig([
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
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
      'import/no-anonymous-default-export': 'off',
      'import/no-default-export': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'n/file-extension-in-import': 'off',
      'n/no-missing-import': 'off',
    },
    settings: baseConfig.settings,
  },
]);
