import jsxA11yConfig from './rules/eslint-plugin-jsx-a11y/index.js';
import reactConfig from './rules/eslint-plugin-react/index.js';
import reactHooksConfig from './rules/eslint-plugin-react-hooks/index.js';

export default {
  plugins: {
    ...jsxA11yConfig.plugins,
    ...reactConfig.plugins,
    ...reactHooksConfig.plugins,
  },
  rules: {
    ...jsxA11yConfig.rules,
    ...reactConfig.rules,
    ...reactHooksConfig.rules,
  },
};
