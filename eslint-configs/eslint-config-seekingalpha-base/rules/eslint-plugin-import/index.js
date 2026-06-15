import importPlugin from 'eslint-plugin-import';

import helpfulWarnings from './helpful-warnings.js';
import moduleSystem from './module-systems.js';
import staticAnalysis from './static-analysis.js';
import styleGuide from './style-guide.js';

export default {
  plugins: {
    import: importPlugin,
  },
  rules: {
    ...helpfulWarnings,
    ...moduleSystem,
    ...staticAnalysis,
    ...styleGuide,
  },
};
