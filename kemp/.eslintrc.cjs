module.exports = {
  'env': {
    'browser': false,
    'commonjs': false,
    'node': true,
    'es2022': true
  },
  'extends': [
    'eslint:recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'semi': ['error', 'never'],
    'no-unused-vars': [
      'error',
      { 'destructuredArrayIgnorePattern': '^_' }
    ],
    'no-cond-assign': 'off',
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-newline': ['error', { 'multiline': true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'computed-property-spacing': ['error', 'never']
  }
}
