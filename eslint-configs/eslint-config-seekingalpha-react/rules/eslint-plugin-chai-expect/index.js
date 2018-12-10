module.exports = {

  plugins: ['chai-expect'],

  rules: {
    // Chai Plugin https://github.com/turbo87/eslint-plugin-chai-expect

    'chai-expect/no-inner-compare': 'error',

    'chai-expect/missing-assertion': 'error',

    'chai-expect/terminating-properties': 'error',

  },

};