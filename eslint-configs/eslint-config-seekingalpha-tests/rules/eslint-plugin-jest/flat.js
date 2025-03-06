import pluginJest from 'eslint-plugin-jest';

import config from './index.js';

export default {
  plugins: {
    jest: pluginJest,
  },

  rules: config.rules,
};
