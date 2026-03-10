import reactConfig from './rules/eslint-plugin-react/oxlint-config.js';
import jsxA11yConfig from './rules/eslint-plugin-jsx-a11y/oxlint-config.js';
import reactHooksConfig from './rules/eslint-plugin-react-hooks/oxlint-config.js';

export default {
  extends: [reactConfig, jsxA11yConfig, reactHooksConfig],
};
