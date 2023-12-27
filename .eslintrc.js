module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['@react-native', 'plugin:typescript-sort-keys/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'sort-keys-fix', 'sort-destructure-keys', 'jest'],
  root: true,
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        distinctGroup: true,
        'newlines-between': 'always',
      },
    ],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
        shorthandLast: true,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
