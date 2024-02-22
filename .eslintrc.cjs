/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylistic = require('@stylistic/eslint-plugin');

const codeStyle = stylistic.configs.customize({
  'indent': 2,
  'quotes': 'single',
  'semi': true,
  'comma-dangle': ['error', 'always-multiline'],
});

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@stylistic/recommended-extends',
  ],
  overrides: [
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    '@stylistic',
  ],
  rules: {
    ...codeStyle.rules,
    'vue/multi-word-component-names': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
