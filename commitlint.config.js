import lerna from '@commitlint/config-lerna-scopes'

export default {
	extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
	rules: {
		'scope-enum': async ctx => [
			2,
			'always',
			[
				...(await lerna.utils.getPackages(ctx)),
			],
		],
	},
}
