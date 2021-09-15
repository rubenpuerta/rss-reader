const fs = require('fs');

const foldersUnderSrc = fs
	.readdirSync('src', { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

const foldersUnderSrcApp = fs
	.readdirSync('src/app', { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

module.exports = {
	root: true,
	ignorePatterns: ['projects/**/*'],
	overrides: [
		{
			files: ['*.ts'],
			parserOptions: {
				project: ['tsconfig.json'],
				createDefaultProgram: true
			},
			plugins: ['jest', 'simple-import-sort'],
			extends: [
				'plugin:@angular-eslint/recommended',
				'plugin:@angular-eslint/template/process-inline-templates',
				'plugin:rxjs/recommended',
				'plugin:jest/recommended',
				'plugin:jest/style'
			],
			rules: {
				'@angular-eslint/component-selector': [
					'error',
					{
						type: 'element',
						prefix: 'app',
						style: 'kebab-case'
					}
				],
				'@angular-eslint/directive-selector': [
					'error',
					{
						type: 'attribute',
						prefix: 'app',
						style: 'camelCase'
					}
				],
				'jest/no-disabled-tests': 'warn',
				'jest/no-focused-tests': 'error',
				'jest/no-identical-title': 'error',
				'jest/prefer-to-have-length': 'warn',
				'jest/valid-expect': 'error',
				'jest/expect-expect': 'off',
				'rxjs/no-ignored-replay-buffer': 'off',
				'rxjs/no-sharereplay': 'off',
				'comma-dangle': ['error', 'never'],
				'max-len': [
					'error',
					120,
					2,
					{
						ignoreUrls: true
					}
				],
				'no-restricted-syntax': 'warn',
				'func-names': 'off',
				'space-before-function-paren': 'off',
				'no-param-reassign': 'warn',
				'prefer-arrow-callback': 'off',
				'new-cap': 'off',
				'import/no-extraneous-dependencies': 'off',
				'no-mixed-operators': 'warn',
				'no-underscore-dangle': ['error', { allow: ['__', '_satellite'] }],
				'@angular-eslint/component-class-suffix': 'error',
				'@angular-eslint/directive-class-suffix': 'error',
				'@angular-eslint/no-forward-ref': 'error',
				'@angular-eslint/no-input-rename': 'error',
				'@angular-eslint/no-output-rename': 'error',
				'@angular-eslint/use-pipe-transform-interface': 'error',
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/array-type': [
					'warn',
					{
						default: 'array'
					}
				],
				'@typescript-eslint/ban-types': [
					'warn',
					{
						types: {
							Object: {
								message: 'Avoid using the `Object` type. Did you mean `object`?'
							},
							Boolean: {
								message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
							},
							Number: {
								message: 'Avoid using the `Number` type. Did you mean `number`?'
							},
							String: {
								message: 'Avoid using the `String` type. Did you mean `string`?'
							},
							Symbol: {
								message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
							}
						}
					}
				],
				'@typescript-eslint/consistent-type-assertions': 'error',
				'@typescript-eslint/dot-notation': 'off',
				'@typescript-eslint/member-delimiter-style': [
					'off',
					{
						multiline: {
							delimiter: 'none',
							requireLast: true
						},
						singleline: {
							delimiter: 'semi',
							requireLast: false
						}
					}
				],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'enum',
						format: ['UPPER_CASE', 'StrictPascalCase', 'camelCase']
					},
					{
						selector: 'enumMember',
						format: ['UPPER_CASE', 'StrictPascalCase', 'camelCase']
					}
				],
				'@typescript-eslint/no-empty-function': 'error',
				'@typescript-eslint/no-empty-interface': 'error',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-misused-new': 'error',
				'@typescript-eslint/no-namespace': 'error',
				'@typescript-eslint/no-parameter-properties': 'off',
				'@typescript-eslint/no-shadow': [
					'error',
					{
						hoist: 'all'
					}
				],
				'@typescript-eslint/no-unused-expressions': [
					'error',
					{
						allowTernary: true
					}
				],
				'@typescript-eslint/no-use-before-define': 'warn',
				'@typescript-eslint/no-var-requires': 'error',
				'@typescript-eslint/prefer-for-of': 'error',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-namespace-keyword': 'error',
				'@typescript-eslint/quotes': [
					'error',
					'single',
					{
						allowTemplateLiterals: true,
						avoidEscape: true
					}
				],
				'@typescript-eslint/semi': ['off', null],
				'@typescript-eslint/triple-slash-reference': [
					'error',
					{
						path: 'always',
						types: 'prefer-import',
						lib: 'always'
					}
				],
				'@typescript-eslint/unified-signatures': 'error',
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							// Packages. `angular` related packages come first.
							// Things that start with a letter (or digit or underscore), or `@` followed by a letter.
							['^angular', '^@?\\w'],
							// Absolute imports and Relative imports.
							[
								`^@(${foldersUnderSrc.join('|')})(/.*|$)`,
								`^@(${foldersUnderSrcApp.join('|')})(/.*|$)`,
								'^\\.'
							],
							// for scss imports.
							['^[^.]']
						]
					}
				],
				'simple-import-sort/exports': 'error'
			}
		},
		{
			files: ['*.html'],
			extends: ['plugin:@angular-eslint/template/recommended'],
			rules: {}
		}
	]
};
