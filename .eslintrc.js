module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    indent: 'off',
    // indent: [
    //   'error',
    //   2,
    //   {
    //     SwitchCase: 1,
    //     ignoredNodes: ['ConditionalExpression'],
    //   },
    // ],
    'linebreak-style': ['error', 'unix'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'prettier/prettier': 'error',
  },
};
