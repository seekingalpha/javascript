import { ESLintPluginReactDisabled } from './rules/eslint-plugin-react/oxlint-disabled.js';
import { ESLintPluginA11YDisabled } from './rules/eslint-plugin-jsx-a11y/oxlint-disabled.js';
import { ESLintPluginReactHooksDisabled } from './rules/eslint-plugin-react-hooks/oxlint-disabled.js';

import config from './index.js';

const oxcConfig = {
  ...config,
  rules: {
    ...config.rules,
    ...ESLintPluginReactDisabled,
    ...ESLintPluginA11YDisabled,
    ...ESLintPluginReactHooksDisabled,
  },
};

export default oxcConfig;
