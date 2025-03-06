import nodePlugin from 'eslint-plugin-n';

import config from './index.js';

export default {
  plugins: {
    // eslint-disable-next-line id-length
    n: nodePlugin,
  },
  rules: config.rules,
};
