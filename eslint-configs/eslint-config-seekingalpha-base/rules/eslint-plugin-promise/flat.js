import promisePlugin from 'eslint-plugin-promise';

import config from './index.js';

export default {
  plugins: {
    promise: promisePlugin,
  },
  rules: {
    ...config.rules,
  },
};
