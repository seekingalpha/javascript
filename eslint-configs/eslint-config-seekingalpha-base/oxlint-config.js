import baseConfig from './rules/eslint/oxlint-config';
import importConfig from './rules/eslint-plugin-import/oxlint-config';
import promiseConfig from './rules/eslint-plugin-promise/oxlint-config';
import unicornConfig from './rules/eslint-plugin-unicorn/oxlint-config';

export default {
  extends: [baseConfig, importConfig, promiseConfig, unicornConfig],
};
