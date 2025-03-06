import jsxA11yConfig from './rules/eslint-plugin-jsx-a11y/flat.js';
import reactConfig from './rules/eslint-plugin-react/flat.js';
import reactHooksConfig from './rules/eslint-plugin-react-hooks/flat.js';

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
