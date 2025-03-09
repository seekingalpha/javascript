import typescriptEslint from 'typescript-eslint';

import disableConfig from './rules/disable-recommended-eslint-rules/index.js';
import config from './rules/typescript-eslint/index.js';

export default {
  plugins: {
    '@typescript-eslint': typescriptEslint.plugin,
  },
  rules: {
    ...disableConfig,
    ...config,
  },
  languageOptions: {
    parser: typescriptEslint.parser,
  },
};
