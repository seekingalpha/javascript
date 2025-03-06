import arrayFunc from 'eslint-plugin-array-func';

// eslint-disable-next-line n/file-extension-in-import, import/extensions
import config from './index.js';

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default {
  plugins: {
    'array-func': arrayFunc,
  },
  rules: config.rules,
};
