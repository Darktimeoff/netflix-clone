import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
// import oxlint from 'eslint-plugin-oxlint' .append(oxlint.configs['flat/all'])
// "lint:oxc": "oxlint --fix --fix-suggestions --import-plugin --tsconfig=./tsconfig.json --disable-react-plugin --promise-plugin --node-plugin --security-plugin",

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
})
