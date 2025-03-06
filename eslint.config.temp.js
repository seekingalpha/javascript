import baseConfig from 'eslint-config-seekingalpha-base/flat.js';
import nodeConfig from 'eslint-config-seekingalpha-node/flat.js';

export default [
  {
    rules: {
      ...baseConfig.rules,
      ...nodeConfig.rules,
    },
  },
];
