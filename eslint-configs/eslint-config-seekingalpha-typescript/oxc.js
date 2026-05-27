import config from './index.js';
import { ESLintPluginTypescriptDisabled } from './rules/typescript-eslint/oxlint-disabled.js';

const oxcConfig = {
  ...config,
  rules: {
    ...config.rules,
    ...ESLintPluginTypescriptDisabled,
  },
};

export default oxcConfig;
