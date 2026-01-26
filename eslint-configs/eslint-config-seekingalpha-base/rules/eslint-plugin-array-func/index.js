import pluginArrayFunc from 'eslint-plugin-array-func';

export default {
  plugins: {
    'array-func': pluginArrayFunc,
  },
  rules: {
    'array-func/from-map': 'error',

    'array-func/no-unnecessary-this-arg': 'error',

    'array-func/prefer-array-from': 'error',

    'array-func/avoid-reverse': 'error',

    // Disable in favor of unicorn/prefer-array-flat
    'array-func/prefer-flat': 'off',

    // Disable in favor of unicorn/prefer-array-flat-map
    'array-func/prefer-flat-map': 'off',
  },
};
