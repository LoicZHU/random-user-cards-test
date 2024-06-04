module.exports = {
  root: true,
  plugins: ['angular', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:angular/johnpapa',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['node_modules/', 'build', 'dist/', 'coverage/', 'src/assets/', '.eslintrc.js'],
  rules: {
    'angular/controller-as-vm': ['error', 'never'],
    semi: ['error', 'always'],
    'no-console': 'warn',
    'no-unused-vars': ['error', { args: 'none' }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
