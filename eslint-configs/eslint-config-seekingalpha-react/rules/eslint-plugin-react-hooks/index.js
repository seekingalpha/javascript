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
  },
};
