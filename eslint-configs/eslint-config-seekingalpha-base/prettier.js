module.exports = {
  extends: ['./index.js'],

  rules: {
    'unicode-bom': 'off',

    // Unicorn
    'unicorn/empty-brace-spaces': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/number-literal-case': 'off',
  },
};
