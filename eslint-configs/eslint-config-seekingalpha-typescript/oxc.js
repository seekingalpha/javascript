import { ESLintPluginTypescriptDisabled } from './rules/typescript-eslint/oxlint-disabled.js';

import config from './index.js';

const oxcConfig = {
  ...config,
  rules: {
    ...config.rules,
    ...ESLintPluginTypescriptDisabled,
  },
};

export default oxcConfig;
