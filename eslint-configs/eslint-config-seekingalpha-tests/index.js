import esLintPluginJestConfig from './rules/eslint-plugin-jest/index.js';
import esLintPluginTestingLibraryConfig from './rules/eslint-plugin-testing-library/index.js';

export default {
  plugins: {
    ...esLintPluginJestConfig.plugins,
    ...esLintPluginTestingLibraryConfig.plugins,
  },
  rules: {
    ...esLintPluginJestConfig.rules,
    ...esLintPluginTestingLibraryConfig.rules,
  },
};
