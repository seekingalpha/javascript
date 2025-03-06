import esLintConfig from './rules/eslint/flat.js';
import esLintPluginArrayFuncConfig from './rules/eslint-plugin-array-func/flat.js';
import esLintPluginImport from './rules/eslint-plugin-import/flat.js';

export default {
  plugins: {
    ...esLintPluginArrayFuncConfig.plugins,
    ...esLintPluginImport.plugins,
  },
  rules: {
    ...esLintConfig.rules,
    ...esLintPluginArrayFuncConfig.rules,
    ...esLintPluginImport.rules,
  },
  settings: {
    ...esLintPluginImport.settings,
  },
};
