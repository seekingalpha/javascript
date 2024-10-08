// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules

module.exports = {
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'error',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+',
        message:
          'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
    'react/checked-requires-onchange-or-readonly': 'error',

    /*
     * no prop types usage
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     */
    'react/default-props-match-prop-types': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': [
      'off',
      {
        ignoreTranspilerName: false,
      },
    ],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     * https://brigade.engineering/don-t-pass-css-classes-between-components-e9f7ab192785
     */
    'react/forbid-component-props': [
      'error',
      {
        forbid: [
          'style',
          {
            propName: 'className',
            allowedFor: ['Button', 'Icon', 'Link'],
          },
        ],
      },
    ],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     * https://www.w3.org/TR/html5-diff/#obsolete-attributes
     */
    'react/forbid-dom-props': [
      'error',
      {
        forbid: [
          'abbr',
          'align',
          'axis',
          'bgcolor',
          'border',
          'cellpadding',
          'cellspacing',
          'char',
          'charoff',
          'charset',
          'clear',
          'coords',
          'frame',
          'frameborder',
          'hspace',
          'longdesc',
          'marginheight',
          'marginwidth',
          'rev',
          'scope',
          'scrolling',
          'shape',
          'size',
          'valign',
          'vspace',
        ],
      },
    ],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     * https://www.w3.org/TR/html5-diff/#obsolete-elements
     */
    'react/forbid-elements': [
      'error',
      {
        forbid: [
          'acronym',
          'applet',
          'basefont',
          'big',
          'center',
          'dir',
          'font',
          'frame',
          'frameset',
          'noframes',
          'isindex',
          'noframes',
          's',
          'strike',
          'tt',
          'u',
        ],
      },
    ],

    /*
     * no prop types usage
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     */
    'react/forbid-foreign-prop-types': 'off',

    /*
     * no prop types usage
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    'react/forward-ref-uses-ref': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
    'react/hook-use-state': [
      'error',
      {
        allowDestructuredState: true,
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
    'react/iframe-missing-sandbox': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
    'react/no-adjacent-inline-elements': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
    'react/no-arrow-function-lifecycle': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-mount-set-state': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-did-update-set-state': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
    'react/no-invalid-html-attribute': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     * https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
     */
    'react/no-is-mounted': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
    'react/no-namespace': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     * using this return value is legacy and should be avoided because future versions of React may render
     * components asynchronously in some cases.
     */
    'react/no-render-return-value': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-set-state': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
    'react/no-unstable-nested-components': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
    'react/no-unused-class-component-methods': 'error',

    /*
     * no prop types usage
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    'react/no-unused-prop-types': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
    'react/prefer-es6-class': ['error', 'always'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
    'react/prefer-exact-props': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true,
      },
    ],

    /*
     * no prop types usage
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    'react/prop-types': 'off',

    /*
     * off after update to 16.4
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    'react/react-in-jsx-scope': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': [
      'error',
      {
        allowDecorators: ['pureComponentDecorator'],
      },
    ],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'instance-variables',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],

    /*
     * no prop types usage
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     */
    'react/sort-prop-types': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['error', 'always'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': ['error', 'static public field'],
  },
};
