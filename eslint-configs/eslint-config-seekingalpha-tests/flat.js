import esLintPluginJestConfig from './rules/eslint-plugin-jest/flat.js';
import esLintPluginTestingLibraryConfig from './rules/eslint-plugin-testing-library/flat.js';

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
