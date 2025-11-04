import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default {
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    // React Hooks Plugin https://www.npmjs.com/package/eslint-plugin-react-hooks

    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',

    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/exhaustive-deps': 'error',

    // React Compiler rules
    'react-hooks/config': 'error',
    'react-hooks/error-boundaries': 'error',
    'react-hooks/component-hook-factories': 'error',
    'react-hooks/gating': 'error',
    'react-hooks/globals': 'error',
    'react-hooks/immutability': 'error',
    'react-hooks/preserve-manual-memoization': 'error',
    'react-hooks/purity': 'error',
    'react-hooks/refs': 'error',
    'react-hooks/set-state-in-effect': 'error',
    'react-hooks/set-state-in-render': 'error',
    'react-hooks/static-components': 'error',
    'react-hooks/unsupported-syntax': 'error',
    'react-hooks/use-memo': 'error',
    'react-hooks/incompatible-library': 'error',
  },
};
