import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import config from './index.js';

export default {
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: config.rules,
};
