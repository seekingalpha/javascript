module.exports = {
  'parser': 'babel-eslint',
  'rules': {
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/exports-style': [
      'error',
      'module.exports'
    ],
    'node/prefer-global/buffer': [
      'error',
      'always'
    ],
    'node/prefer-global/console': [
      'error',
      'always'
    ],
    'node/prefer-global/process': [
      'error',
      'always'
    ],
    'node/prefer-global/url-search-params': [
      'error',
      'always'
    ],
    'node/prefer-global/url': [
      'error',
      'always'
    ]
  }
};