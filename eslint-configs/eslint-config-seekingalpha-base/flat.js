// eslint-disable-next-line n/file-extension-in-import, import/extensions
import esLintConfig from './rules/eslint/flat.js';
// eslint-disable-next-line n/file-extension-in-import, import/extensions
import esLintPluginArrayFuncConfig from './rules/eslint-plugin-array-func/flat.js';

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default {
  plugins: {
    ...esLintPluginArrayFuncConfig.plugins,
  },
  rules: {
    ...esLintConfig.rules,
    ...esLintPluginArrayFuncConfig.rules,
  },
};
