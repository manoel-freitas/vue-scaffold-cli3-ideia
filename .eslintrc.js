module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-useless-return': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
