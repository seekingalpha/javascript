const config = require('../config');

const rulesRunTs = {
  '@typescript-eslint/require-await': 'off',

  '@typescript-eslint/return-await': 'off',

  '@typescript-eslint/dot-notation': 'off',

  '@typescript-eslint/no-implied-eval': 'off',

  '@typescript-eslint/await-thenable': 'off',

  '@typescript-eslint/consistent-return': 'off',

  '@typescript-eslint/consistent-type-exports': 'off',

  '@typescript-eslint/naming-convention': 'off',

  '@typescript-eslint/no-array-delete': 'off',

  '@typescript-eslint/no-base-to-string': 'off',

  '@typescript-eslint/no-duplicate-type-constituents': 'off',

  '@typescript-eslint/no-for-in-array': 'off',

  '@typescript-eslint/no-misused-promises': 'off',

  '@typescript-eslint/no-mixed-enums': 'off',

  '@typescript-eslint/no-meaningless-void-operator': 'off',

  '@typescript-eslint/no-unnecessary-template-expression': 'off',

  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

  '@typescript-eslint/no-unnecessary-qualifier': 'off',

  '@typescript-eslint/no-unnecessary-type-arguments': 'off',

  '@typescript-eslint/no-unnecessary-type-assertion': 'off',

  '@typescript-eslint/no-unsafe-unary-minus': 'off',

  '@typescript-eslint/non-nullable-type-assertion-style': 'off',

  '@typescript-eslint/only-throw-error': 'off',

  '@typescript-eslint/prefer-find': 'off',

  '@typescript-eslint/prefer-includes': 'off',

  '@typescript-eslint/prefer-optional-chain': 'off',

  '@typescript-eslint/prefer-promise-reject-errors': 'off',

  '@typescript-eslint/prefer-readonly': 'off',

  '@typescript-eslint/prefer-reduce-type-parameter': 'off',

  '@typescript-eslint/prefer-regexp-exec': 'off',

  '@typescript-eslint/prefer-return-this-type': 'off',

  '@typescript-eslint/prefer-string-starts-ends-with': 'off',

  '@typescript-eslint/promise-function-async': 'off',

  '@typescript-eslint/switch-exhaustiveness-check': 'off',

  '@typescript-eslint/unbound-method': 'off',

  '@typescript-eslint/strict-boolean-expressions': 'off',

  '@typescript-eslint/no-confusing-void-expression': 'off',

  '@typescript-eslint/no-floating-promises': 'off',

  '@typescript-eslint/no-redundant-type-constituents': 'off',

  '@typescript-eslint/no-unnecessary-condition': 'off',

  '@typescript-eslint/no-unsafe-argument': 'off',

  '@typescript-eslint/no-unsafe-assignment': 'off',

  '@typescript-eslint/no-unsafe-call': 'off',

  '@typescript-eslint/restrict-plus-operands': 'off',

  '@typescript-eslint/no-unsafe-enum-comparison': 'off',

  '@typescript-eslint/no-unsafe-member-access': 'off',

  '@typescript-eslint/no-unsafe-return': 'off',

  '@typescript-eslint/prefer-nullish-coalescing': 'off',

  '@typescript-eslint/prefer-destructuring': 'off',

  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  '@typescript-eslint/require-array-sort-compare': 'off',

  '@typescript-eslint/restrict-template-expressions': 'off',

  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
};

module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],

  rules: {
    ...rulesRunTs,

    '@typescript-eslint/adjacent-overload-signatures': 'error',

    '@typescript-eslint/ban-ts-comment': 'error',

    '@typescript-eslint/ban-tslint-comment': 'error',

    '@typescript-eslint/ban-types': 'error',

    '@typescript-eslint/class-methods-use-this': 'error',

    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor',
    ],

    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],

    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],

    '@typescript-eslint/default-param-last': 'error',

    '@typescript-eslint/init-declarations': ['off', 'always'],

    '@typescript-eslint/max-params': ['error', { max: config.maxParams }],

    '@typescript-eslint/member-ordering': 'error',

    '@typescript-eslint/method-signature-style': 'error',

    '@typescript-eslint/no-array-constructor': 'error',

    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    '@typescript-eslint/no-dupe-class-members': 'error',

    '@typescript-eslint/no-duplicate-enum-values': 'error',

    '@typescript-eslint/no-dynamic-delete': 'error',

    '@typescript-eslint/no-empty-function': 'error',

    '@typescript-eslint/no-empty-interface': 'error',

    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    '@typescript-eslint/no-extraneous-class': 'error',

    '@typescript-eslint/no-import-type-side-effects': 'error',

    '@typescript-eslint/no-inferrable-types': 'error',

    '@typescript-eslint/no-invalid-void-type': 'error',

    '@typescript-eslint/no-loop-func': 'error',

    '@typescript-eslint/no-loss-of-precision': 'error',

    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        // These numbers are used in simple cases, we can exclude them
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/no-namespace': 'error',

    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    '@typescript-eslint/no-non-null-assertion': 'error',

    '@typescript-eslint/parameter-properties': 'error',

    '@typescript-eslint/no-redeclare': 'error',

    '@typescript-eslint/no-require-imports': 'error',

    '@typescript-eslint/no-restricted-imports': 'error',

    '@typescript-eslint/no-shadow': [
      'error',
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: [],
      },
    ],

    '@typescript-eslint/no-this-alias': 'error',

    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '[iI]gnored',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '[iI]gnored',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '[iI]gnored',
      },
    ],

    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
        enums: true,
        typedefs: true,
      },
    ],

    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/no-useless-empty-export': 'error',

    '@typescript-eslint/no-var-requires': 'error',

    '@typescript-eslint/prefer-as-const': 'error',

    '@typescript-eslint/prefer-enum-initializers': 'error',

    '@typescript-eslint/prefer-for-of': 'error',

    '@typescript-eslint/prefer-function-type': 'error',

    '@typescript-eslint/prefer-literal-enum-member': 'error',

    '@typescript-eslint/prefer-namespace-keyword': 'error',

    '@typescript-eslint/sort-type-constituents': 'error',

    '@typescript-eslint/triple-slash-reference': 'error',

    '@typescript-eslint/typedef': 'error',

    '@typescript-eslint/unified-signatures': 'error',

    '@typescript-eslint/no-invalid-this': 'error',

    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'generic',
        readonly: 'generic',
      },
    ],

    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          constructors: 'no-public',
        },
      },
    ],

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/no-type-alias': [
      'error',
      {
        allowAliases: 'in-unions-and-intersections',
        allowCallbacks: 'always',
        allowConditionalTypes: 'always',
        allowConstructors: 'never',
        allowLiterals: 'always',
        allowMappedTypes: 'always',
        allowTupleTypes: 'always',
        allowGenerics: 'always',
      },
    ],
  },
};
