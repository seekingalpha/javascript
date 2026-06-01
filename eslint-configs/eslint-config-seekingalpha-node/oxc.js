import config from './index.js';
import { ESLintPluginNodeDisabled } from './rules/eslint-plugin-n/oxlint-disabled.js';

const oxcConfig = {
  ...config,
  rules: {
    ...config.rules,
    ...ESLintPluginNodeDisabled,
  },
};

export default oxcConfig;
