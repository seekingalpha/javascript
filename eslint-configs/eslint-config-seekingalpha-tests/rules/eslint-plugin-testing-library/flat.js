import pluginTestingLibrary from 'eslint-plugin-testing-library';

import config from './index.js';

export default {
  plugins: {
    'testing-library': pluginTestingLibrary,
  },

  rules: config.rules,
};
