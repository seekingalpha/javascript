module.exports = {
  extends: [
    // https://github.com/yannickcr/eslint-plugin-react
    './rules/eslint/index.js',

    // https://github.com/yannickcr/eslint-plugin-react
    './rules/eslint-plugin-react/index.js',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    './rules/eslint-plugin-jsx-a11y/index.js',

    // https://reactjs.org/docs/hooks-rules.html
    './rules/eslint-plugin-react-hooks/index.js',
  ],

  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false,
      jsx: true,
    },
  },
};
