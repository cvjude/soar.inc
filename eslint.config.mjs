import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ),
  {
    ignores: [
      '.next/',
      'types/',
      '**/tailwind.config.ts',
      '**/types.ts',
      '**/config.js',
      '.react-router',
    ],
  },
  {
    plugins: {
      react,
      'react-hooks': fixupPluginRules(reactHooks),
      '@typescript-eslint': typescriptEslint,
      import: fixupPluginRules(_import),
      'jsx-a11y': jsxA11Y,
    },

    languageOptions: {
      globals: {
        ...Object.fromEntries(
          Object.entries(globals.browser).map(([key, value]) => [
            key.trim(),
            value,
          ]),
        ),
        ...Object.fromEntries(
          Object.entries(globals.node).map(([key, value]) => [
            key.trim(),
            value,
          ]),
        ),
        __isBrowser__: true,
      },
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
      polyfills: ['Promise', 'IntersectionObserver', 'ResizeObserver'],
    },

    rules: {
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/interactive-supports-focus': 'error',
      'jsx-a11y/control-has-associated-label': [
        'error',
        {
          ignoreElements: [
            'audio',
            'canvas',
            'embed',
            'input',
            'textarea',
            'tr',
            'video',
          ],
          ignoreRoles: [
            'grid',
            'listbox',
            'menu',
            'menubar',
            'radiogroup',
            'row',
            'tablist',
            'toolbar',
            'tree',
          ],
          includeRoles: ['alert', 'dialog'],
        },
      ],
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'react/prop-types': 0,
      'react/no-unescaped-entities': 0,
      'react/display-name': 'off',
      'no-prototype-builtins': 'off',
      'react/no-string-refs': 'off',
      'react/no-find-dom-node': 'off',
      'prefer-const': 'error',
      'no-duplicate-imports': [
        'error',
        {
          includeExports: false,
        },
      ],
      'import/order': [
        2,
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'index',
            'sibling',
            'parent',
          ],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'never',
        },
      ],
    },
  },
];
