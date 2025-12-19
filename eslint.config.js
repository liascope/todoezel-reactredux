import js from '@eslint/js'
import globals from 'globals'
import reactRefresh from 'eslint-plugin-react-refresh'

export default {
  files: ['**/*.{js,jsx}'],
  languageOptions: {
    globals: globals.browser,
    parserOptions: {
      ecmaVersion: 'latest',
      ecmaFeatures: { jsx: true },
      sourceType: 'module',
    },
  },
  extends: [
    js.configs.recommended,
    reactRefresh.configs.vite,
  ],
  rules: {
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
  },
}
