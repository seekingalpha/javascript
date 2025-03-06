import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import config from './index';

export default {
  plugins: {
    unicorn: eslintPluginUnicorn,
  },
  rules: config.rules,
};
