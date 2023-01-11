// https://github.com/freaktechnik/eslint-plugin-array-func

module.exports = {

  plugins: ['array-func'],

  rules: {

    'array-func/from-map': 'error',

    'array-func/no-unnecessary-this-arg': 'error',

    'array-func/prefer-array-from': 'error',

    'array-func/avoid-reverse': 'error',

    // Disable in favour of unicorn/prefer-array-flat
    'array-func/prefer-flat': 'off',

    // Disable in favour of unicorn/prefer-array-flat-map
    'array-func/prefer-flat-map': 'off',

  },

};
