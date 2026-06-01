import baseConfig from 'eslint-config-seekingalpha-base/oxlint-config.js';
import nodeConfig from 'eslint-config-seekingalpha-node/oxlint-config.js';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig, nodeConfig],
  env: {
    builtin: true,
  },
  rules: {
    'no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: ['config'],
        ignoreFunctionTypeParameterNameValueShadow: true,
        ignoreOnInitialization: false,
        ignoreTypeValueShadow: true,
      },
    ],
    'import/no-anonymous-default-export': 'off',
    'import/no-default-export': 'off',
  },
});
