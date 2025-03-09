import reactPlugin from 'eslint-plugin-react';

import jsxConfig from './jsx.js';
import reactConfig from './react.js';

export default {
  plugins: {
    react: reactPlugin,
  },
  rules: {
    ...jsxConfig.rules,
    ...reactConfig.rules,
  },
};
