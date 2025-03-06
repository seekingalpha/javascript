import pluginArrayFunc from 'eslint-plugin-array-func';

import config from './index.js';

export default {
  plugins: {
    'array-func': pluginArrayFunc,
  },
  rules: config.rules,
};
