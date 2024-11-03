export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue/scss',
		'stylelint-config-clean-order',
		'@stylistic/stylelint-config',
	],
	rules: {
		'@stylistic/indentation': [4, {
			baseIndentLevel: 0,
		}],
		'@stylistic/max-empty-lines': 2,
		'@stylistic/number-leading-zero': 'always',
		'@stylistic/string-quotes': 'single',
		'max-nesting-depth': 3,
	},
	customSyntax: 'postcss-html', // For linting within your Vue templates
}
