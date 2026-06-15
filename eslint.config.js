import baseConfig from 'eslint-config-seekingalpha-base/oxc.js';
import nodeConfig from 'eslint-config-seekingalpha-node/oxc.js';
import { defineConfig } from 'eslint/config';

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
    },
  },
]);
