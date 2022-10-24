const fs = require('fs');

const folders = fs
	.readdirSync('./', { withFileTypes: true })
	.filter(
		(dirent) =>
			dirent.isDirectory() &&
			![
				'.next',
				'.idea',
				'.fleet',
				'.vscode',
				'.husky',
				'.github',
				'.git',
				'node_modules',
				'public'
			].includes(dirent.name)
	)
	.map((dirent) => !['styles'].includes(dirent.name) && dirent.name);

const foldersPaths = ['~/', '@pages', '@config', '@components'];

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'airbnb', 'next', 'prettier'],
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': ['error', { usePrettierrc: true }]
	},
	overrides: [
		{
			// Rules for React (using JS)
			files: ['*.jsx'],
			rules: {
				'react/react-in-jsx-scope': 'off',
				'react/jsx-curly-brace-presence': [
					'warn',
					{
						props: 'always'
					}
				],
				'react/jsx-sort-props': [
					'error',
					{
						callbacksLast: true,
						shorthandFirst: true,
						reservedFirst: ['key'],
						multiline: 'last'
					}
				],
				'react/button-has-type': 'off',
				'react/require-default-props': 'off',
				'react/function-component-definition': 'off',
				'jsx-a11y/anchor-is-valid': [
					'error',
					{
						components: ['Link'],
						specialLink: ['hrefLeft', 'hrefRight'],
						aspects: ['invalidHref', 'preferButton']
					}
				],
				'react/jsx-props-no-spreading': 'off'
			}
		},
		{
			// Rules for TypeScript and React (using TS)
			files: ['*.ts', '*.tsx'],
			extends: ['airbnb-typescript', 'airbnb-typescript-prettier'],
			plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'unused-imports'],
			excludedFiles: ['*.js', '*.cjs', '*.mjs'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				ecmaVersion: 12,
				sourceType: 'module',
				project: './tsconfig.json'
			},
			rules: {
				'react/jsx-filename-extension': [
					1,
					{
						extensions: ['.ts', '.tsx']
					}
				],
				'react/react-in-jsx-scope': 'off',
				'react/jsx-curly-brace-presence': [
					'warn',
					{
						props: 'always'
					}
				],
				'react/jsx-sort-props': [
					'error',
					{
						callbacksLast: true,
						shorthandFirst: true,
						reservedFirst: ['key'],
						multiline: 'last'
					}
				],
				'react/button-has-type': 'off',
				'react/require-default-props': 'off',
				'react/function-component-definition': 'off',
				'jsx-a11y/anchor-is-valid': [
					'error',
					{
						components: ['Link'],
						specialLink: ['hrefLeft', 'hrefRight'],
						aspects: ['invalidHref', 'preferButton']
					}
				],
				'react/jsx-props-no-spreading': 'off',
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'variableLike',
						format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
						leadingUnderscore: 'allow'
					}
				],
				'import/prefer-default-export': 'off',
				'import/no-cycle': 'off',
				'simple-import-sort/exports': 'error',
				'import/first': 'error',
				'import/newline-after-import': 'error',
				'import/no-duplicates': 'error',
				'unused-imports/no-unused-imports': 'error',
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							['^react', '^next', '^recoil', '^@?\\w'],
							['^styles', '^@styles'],
							[
								`^(${foldersPaths.join('|')})(/.*|$)`,
								`^(${folders.join('|')})(/.*|$)`,
								'^\\.'
							],
							['^[^.]']
						]
					}
				]
			}
		},
		{
			// For config files
			files: [
				'.eslintrc.cjs',
				'commitlint.config.cjs',
				'next.config.cjs',
				'prettier.config.cjs',
				'*.cjs',
				'*.mjs'
			],
			env: {
				node: true
			},
			rules: {
				'import/no-extraneous-dependencies': 'off'
			}
		}
	]
};
