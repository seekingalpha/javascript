import { ESLintDisabled } from './rules/eslint/oxlint-disabled.js';
import { ESLintPluginPromiseDisabled } from './rules/eslint-plugin-promise/oxlint-disabled.js';
import { ESLintPluginUnicornDisabled } from './rules/eslint-plugin-unicorn/oxlint-disabled.js';
import { ESLintPluginImportDisabled } from './rules/eslint-plugin-import/oxlint-disabled.js';

import config from './index.js';

const oxcConfig = {
  ...config,
  rules: {
    ...config.rules,
    ...ESLintDisabled,
    ...ESLintPluginImportDisabled,
    ...ESLintPluginPromiseDisabled,
    ...ESLintPluginUnicornDisabled,
  },
};

export default oxcConfig;
