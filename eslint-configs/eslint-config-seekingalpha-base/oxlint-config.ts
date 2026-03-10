// @ts-ignore
import baseConfig from './rules/eslint/oxlint-config.ts';
// @ts-ignore
import importConfig from './rules/eslint-plugin-import/oxlint-config.ts';

// @ts-ignore
import promiseConfig from './rules/eslint-plugin-promise/oxlint-config.ts';

// @ts-ignore
import unicornConfig from './rules/eslint-plugin-unicorn/oxlint-config.ts';

export default {
  extends: [baseConfig, importConfig, promiseConfig, unicornConfig],
};
