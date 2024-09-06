import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import i18next from 'eslint-plugin-i18next'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      indent: ['error', 2],
      'i18next/no-literal-string': ['error', { markupOnly: true }],
      'max-len': ['error', { code: 120, ignoreComments: true }],
      'react/prop-types': [2, { ignore: ['children'] }],
    },
    plugins: { i18next },
  },
  // {
  //   ignores: ['.node_modules/*', '.build/*', '.src/*'],
  // },
]
