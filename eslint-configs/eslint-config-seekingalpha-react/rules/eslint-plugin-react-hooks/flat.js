import reactHooksPlugin from 'eslint-plugin-react-hooks';

import config from './index.js';

export default {
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: config.rules,
};
