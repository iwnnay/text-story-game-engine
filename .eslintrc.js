module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }]
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
  },
  'env': {
    browser: true,
    node: true,
    'jest/globals': true,
    es6: true,
  },
  plugins: ['react', 'jest'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
