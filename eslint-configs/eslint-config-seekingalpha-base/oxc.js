import esLintConfig from './rules/eslint/index.js';
import esLintPluginImport from './rules/eslint-plugin-import/index.js';
import esLintPluginUnicorn from './rules/eslint-plugin-unicorn/index.js';
import { ESLintDisabled } from './rules/eslint/oxlint-disabled.js';
import { ESLintPluginPromiseDisabled } from './rules/eslint-plugin-promise/oxlint-disabled.js';
import { ESLintPluginUnicornDisabled } from './rules/eslint-plugin-unicorn/oxlint-disabled.js';
import { ESLintPluginImportDisabled } from './rules/eslint-plugin-import/oxlint-disabled.js';

const oxcConfig = {
  plugins: {
    ...esLintPluginImport.plugins,
    ...esLintPluginUnicorn.plugins,
  },
  rules: {
    ...esLintConfig.rules,
    ...esLintPluginImport.rules,
    ...esLintPluginUnicorn.rules,
    // Disabled rules for OXC projects
    ...ESLintDisabled,
    ...ESLintPluginImportDisabled,
    ...ESLintPluginPromiseDisabled,
    ...ESLintPluginUnicornDisabled,
  },
  settings: {
    ...esLintPluginImport.settings,
  },
};

export default oxcConfig;
