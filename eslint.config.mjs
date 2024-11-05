import globals from 'globals'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginReactHooksConfig from 'eslint-plugin-react-hooks/configs/recommended.js'
import pluginJsxRuntimeConfig from 'eslint-plugin-react/configs/jsx-runtime.js'
import reactRefresh from 'eslint-plugin-react-refresh'

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      react: { version: '18.2' }
    },
    plugins: {
      'react-refresh': reactRefresh
    },
    rules: {
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  },
  ...compat.extends('standard'),
  pluginReactConfig,
  pluginReactHooksConfig,
  pluginJsxRuntimeConfig
]
