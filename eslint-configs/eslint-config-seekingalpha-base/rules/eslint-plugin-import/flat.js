import importPlugin from 'eslint-plugin-import';

import helpfulWarnings from './helpful-warnings.js';
import moduleSystem from './module-systems.js';
import staticAnalysis from './static-analysis.js';
import styleGuide from './style-guide.js';

import config from './index.js';

export default {
  plugins: {
    import: importPlugin,
  },
  rules: {
    ...helpfulWarnings.rules,
    ...moduleSystem.rules,
    ...staticAnalysis.rules,
    ...styleGuide.rules,
  },
  settings: config.settings,
};
