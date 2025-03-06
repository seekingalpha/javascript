import jsxA11y from 'eslint-plugin-jsx-a11y';

import config from './index.js';

export default {
  plugins: {
    'jsx-a11y': jsxA11y,
  },
  rules: config.rules,
};
