import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import i18next from 'eslint-plugin-i18next'
import pluginAirbnb from 'eslint-config-airbnb'
import pluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

/** @type {import('eslint').Linter.ConfigFlat[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    ignores: ['**/json-server'],
  },
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser, ...globals.es2021 },
      parserOptions: {
        ...pluginReact.configs.recommended.parserOptions,
        ecmaFeatures: {
          tsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // pluginImport.flatConfigs.recommended,
  {
    plugins: {
      i18next,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
      'jsx-a11y': pluginJsxA11y,
      airbnb: pluginAirbnb,
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'off',
      indent: ['error', 2],
      'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
      'max-len': ['error', { code: 120, ignoreComments: true }],
      'react/prop-types': [2, { ignore: ['children'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-refresh/only-export-components': 'off',
      // 'import/no-dynamic-require': 'warn',
      // 'import/no-nodejs-modules': 'warn',
      'jsx-a11y/alt-text': 'error',
    },
  },
]
