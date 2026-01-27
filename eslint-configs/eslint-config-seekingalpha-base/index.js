import esLintConfig from './rules/eslint/index.js';
import esLintPluginImport from './rules/eslint-plugin-import/index.js';
import esLintPluginPromise from './rules/eslint-plugin-promise/index.js';
import esLintPluginUnicorn from './rules/eslint-plugin-unicorn/index.js';

export default {
  plugins: {
    ...esLintPluginImport.plugins,
    ...esLintPluginPromise.plugins,
    ...esLintPluginUnicorn.plugins,
  },
  rules: {
    ...esLintConfig.rules,
    ...esLintPluginImport.rules,
    ...esLintPluginPromise.rules,
    ...esLintPluginUnicorn.rules,
  },
  settings: {
    ...esLintPluginImport.settings,
  },
};
