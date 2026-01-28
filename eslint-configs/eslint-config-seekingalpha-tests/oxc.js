import { ESLintPluginJestDisabled } from './rules/eslint-plugin-jest/oxlint-disabled.js';

import config from './index.js';

const oxcConfig = {
  ...config,
  rules: {
    ...config.rules,
    ...ESLintPluginJestDisabled,
  },
};

export default oxcConfig;
