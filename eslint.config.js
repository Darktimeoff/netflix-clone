import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    typescript: {
      strict: true
    }
  }
}).override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off'
    }
  })