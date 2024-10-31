// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'src/',
  alias: {
    '~': path.resolve(__dirname, 'src'),
    '@': path.resolve(__dirname, 'src'),
    '@public': path.resolve(__dirname, 'src/public'),
  },
  devtools: { enabled: true }
})
