import config from '../config.js';

// https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
export default {
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
  'react/jsx-boolean-value': [
    'error',
    'never',
    {
      always: [],
    },
  ],

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
   * Disabled to work with prettier
   */
  'react/jsx-child-element-spacing': 'off',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
   * disable to work with prettier
   */
  'react/jsx-closing-bracket-location': 'off',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
   * disable to work with prettier
   */
  'react/jsx-closing-tag-location': 'off',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
   * disable to work with prettier
   */
  'react/jsx-curly-spacing': 'off',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
   * disable to work with prettier
   */
  'react/jsx-equals-spacing': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  'react/jsx-filename-extension': [
    'error',
    {
      extensions: ['.tsx'],
    },
  ],

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
   * disable to work with prettier
   */
  'react/jsx-first-prop-new-line': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  'react/jsx-fragments': ['error', 'syntax'],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
  'react/jsx-handler-names': 'off',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
   * disable to work with prettier
   */
  'react/jsx-indent': 'off',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
   * disable ti work with prettier
   */
  'react/jsx-indent-props': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
  'react/jsx-max-depth': [
    'error',
    {
      max: config.jsxMaxDepth,
    },
  ],

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
   * disable to work with prettier
   */
  'react/jsx-max-props-per-line': 'off',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
   * disable to work with prettier
   */
  'react/jsx-newline': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
  'react/jsx-no-bind': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
  'react/jsx-no-comment-textnodes': 'error',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  'react/jsx-no-constructed-context-values': 'error',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
  'react/jsx-no-duplicate-props': [
    'error',
    {
      ignoreCase: true,
    },
  ],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
  'react/jsx-no-leaked-render': 'error',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
  'react/jsx-no-literals': [
    'off',
    {
      noStrings: true,
    },
  ],

  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
  'react/jsx-props-no-spread-multi': 'error',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
  'react/jsx-no-target-blank': [
    'error',
    {
      enforceDynamicLinks: 'always',
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
  'react/jsx-no-undef': 'error',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
   * disable to worl with prettier
   */
  'react/jsx-one-expression-per-line': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  'react/jsx-curly-brace-presence': [
    'error',
    {
      props: 'never',
      children: 'never',
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: false,
      ignore: [],
    },
  ],

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
   * disable to work with prettier
   */
  'react/jsx-props-no-multi-spaces': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
  'react/sort-default-props': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  'react/jsx-sort-props': [
    'error',
    {
      ignoreCase: true,
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: false,
    },
  ],

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
   * disable to work with prettier
   */
  'react/jsx-tag-spacing': 'off',

  /*
   * off after update to 16.4
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
   */
  'react/jsx-uses-react': 'error',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
  'react/jsx-uses-vars': 'error',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
   * disable to work with prettier
   */
  'react/jsx-wrap-multilines': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
  'react/no-danger': 'error',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
  'react/jsx-props-no-spreading': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
  'react/prefer-read-only-props': 'error',

  /*
   * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
   * disable to work with prettier
   */
  'react/jsx-curly-newline': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
  'react/jsx-no-useless-fragment': [
    'error',
    {
      allowExpressions: true,
    },
  ],

  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
  'react/jsx-no-script-url': 'error',

  'react/no-object-type-as-default-prop': 'error',
};
