import baseConfig from './rules/eslint/oxlint-config.js';
import importConfig from './rules/eslint-plugin-import/oxlint-config.js';
import unicornConfig from './rules/eslint-plugin-unicorn/oxlint-config.js';

export default {
  extends: [baseConfig, importConfig, unicornConfig],
};
