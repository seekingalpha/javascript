import { ESLintPluginReactDisabled } from './rules/eslint-plugin-react/oxlint-disabled.js';

import config from './index.js';

const oxcConfig = {
  ...config,
  rules: {
    ...config.rules,
    ...ESLintPluginReactDisabled,
  },
};

export default oxcConfig;
