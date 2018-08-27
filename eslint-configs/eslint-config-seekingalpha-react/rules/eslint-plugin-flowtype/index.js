module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'flowtype'
  ],
  'rules': {
    'flowtype/boolean-style': [
      'error',
      'boolean'
    ],
    'flowtype/define-flow-type': 'warn',
    'flowtype/delimiter-dangle': 'off',
    'flowtype/generic-spacing': [
      'error',
      'never'
    ],
    'flowtype/no-types-missing-file-annotation': 'error',
    'flowtype/no-weak-types': 'off',
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-return-type': 'off',
    'flowtype/require-valid-file-annotation': 'off',
    'flowtype/semi': 'off',
    'flowtype/space-after-type-colon': [
      'error',
      'always'
    ],
    'flowtype/space-before-generic-bracket': [
      'error',
      'never'
    ],
    'flowtype/space-before-type-colon': [
      'error',
      'never'
    ],
    'flowtype/type-id-match': 'off',
    'flowtype/union-intersection-spacing': [
      'error',
      'always'
    ],
    'flowtype/use-flow-type': 'warn',
    'flowtype/valid-syntax': 'warn'
  },
  'settings': {
    'flowtype': {
      'onlyFilesWithFlowAnnotation': true
    }
  }
};