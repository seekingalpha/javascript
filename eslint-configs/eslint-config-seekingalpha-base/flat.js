import esLintConfig from './rules/eslint/flat.js';
import esLintPluginArrayFuncConfig from './rules/eslint-plugin-array-func/flat.js';
import esLintPluginImport from './rules/eslint-plugin-import/flat.js';
import esLintPluginPromise from './rules/eslint-plugin-promise/flat.js';
import esLintPluginUnicorn from './rules/eslint-plugin-unicorn/flat.js';

export default {
  plugins: {
    ...esLintPluginArrayFuncConfig.plugins,
    ...esLintPluginImport.plugins,
    ...esLintPluginPromise.plugins,
    ...esLintPluginUnicorn.plugins,
  },
  rules: {
    ...esLintConfig.rules,
    ...esLintPluginArrayFuncConfig.rules,
    ...esLintPluginImport.rules,
    ...esLintPluginPromise.rules,
    ...esLintPluginUnicorn.rules,
  },
  settings: {
    ...esLintPluginImport.settings,
  },
};
