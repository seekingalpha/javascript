module.exports = {
  plugins: ['testing-library'],

  rules: {
    // Testing Library Plugin https://github.com/testing-library/eslint-plugin-testing-library

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-queries.md
    'testing-library/await-async-queries': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
    'testing-library/await-async-utils': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-fire-event.md
    'testing-library/await-async-events': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
    'testing-library/consistent-data-testid': 'off',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md
    'testing-library/no-await-sync-events': [
      'error',
      {
        eventModules: ['fire-event'],
      },
    ],

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-queries.md
    'testing-library/no-await-sync-queries': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
    'testing-library/no-container': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
    'testing-library/no-debugging-utils': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
    'testing-library/no-dom-import': ['error', 'react'],

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-global-regexp-flag-in-query.md
    'testing-library/no-global-regexp-flag-in-query': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
    'testing-library/no-manual-cleanup': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
    'testing-library/no-node-access': 'off',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
    'testing-library/no-promise-in-fire-event': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-lifecycle.md
    'testing-library/no-render-in-lifecycle': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
    'testing-library/no-unnecessary-act': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
    'testing-library/no-wait-for-multiple-assertions': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
    'testing-library/no-wait-for-side-effects': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
    'testing-library/no-wait-for-snapshot': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
    'testing-library/prefer-explicit-assert': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
    'testing-library/prefer-find-by': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
    'testing-library/prefer-presence-queries': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
    'testing-library/prefer-query-by-disappearance': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
    'testing-library/prefer-screen-queries': 'error',

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
    'testing-library/render-result-naming-convention': 'error',
  },
};
