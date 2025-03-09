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
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mts', '.cts', '.json'],
      },
    },

    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mts', '.cts'],

    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      String.raw`\.(scss|css|less|hbs|svg|json)$`,
    ],
  },
};
