import esLintPluginTestingLibraryConfig from './rules/eslint-plugin-testing-library/index.js';

export default {
  plugins: {
    ...esLintPluginTestingLibraryConfig.plugins,
  },
  rules: {
    ...esLintPluginTestingLibraryConfig.rules,
  },
};
