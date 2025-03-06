import esLintConfig from './rules/eslint/flat';

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default {
  rules: {
    ...esLintConfig.rules,
  },
};
