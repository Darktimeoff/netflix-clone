import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import oxlint from 'eslint-plugin-oxlint'

export default createConfigForNuxt({
	features: {
		stylistic: {
			semi: false,
			quotes: 'single',
			indent: 'tab',
		},
	},
}).override('nuxt/typescript/rules', {
	rules: {
		'@typescript-eslint/no-extraneous-class': 'off',
	},
}).append([
	{

		files: ['**/*.ts', '**/*.js'],
		...oxlint.configs['flat/all'],
	},
])
