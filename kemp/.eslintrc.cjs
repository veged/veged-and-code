module.exports = {
  env: {
    browser: false,
    commonjs: false,
    node: true,
    es2022: true
  },
  extends: ['eslint:recommended'],
  overrides: [],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ['error', 'never'],
    'no-unused-vars': [
      'error',
      { destructuredArrayIgnorePattern: '^_' }
    ],
    'no-cond-assign': 'off',
    'keyword-spacing': ['error', {
      before: true,
      after: false,
      overrides: {
        import: { after: true },
        export: { after: true },
        from: { after: true },
        else: { after: true },
        of: { after: true },
        in: { after: true },
        as: { after: true },
        return: { after: true },
        yield: { after: true },
        const: { after: true },
        let: { after: true },
        var: { after: true },
        do: { after: true }
      }
    }],
    'space-in-parens': ['error', 'never'],
    'no-multi-spaces': ['error', { exceptions: { ImportDeclaration: true } }],
    'array-bracket-spacing': ['error', 'never'],
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'quote-props': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'computed-property-spacing': ['error', 'never']
  }
}
