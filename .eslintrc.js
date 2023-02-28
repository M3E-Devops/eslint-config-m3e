module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true // Enable JSX since we're using React
    }
  },
  settings: {
    react: {
      version: 'detect' // Automatically detect the react version
    }
  },
  env: {
    es6: true,
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react-prefer-function-component/recommended',
    'prettier'
  ],
  plugins: ['react-hooks', 'react-prefer-function-component', 'prefer-arrow-functions'],
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'newline-per-chained-call': 'off',
    'jsx-a11y/label-has-for': [
      'warn',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'no-confusing-arrow': 'off',
    'no-use-before-define': 'off',
    'prefer-template': 'error',
    'require-yield': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false
      }
    ],
    'react/require-extension': 'off',
    'react/sort-prop-types': [
      'warn',
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'no-console': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': 'error',
    'react/prop-types': 'off',
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
};
