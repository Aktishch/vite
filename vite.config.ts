import tailwindcss from '@tailwindcss/vite'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import { defineConfig, UserConfig } from 'vite'
import checker from 'vite-plugin-checker'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import vituum from 'vituum'

export default defineConfig({
  server: {
    port: 9000
  },
  plugins: [
    ViteMinifyPlugin({
      removeComments: true,
      collapseWhitespace: false
    }),
    vituum(),
    nunjucks(),
    tailwindcss(),
    checker({
      typescript: true,
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{ts,js}"'
      },
      stylelint: {
        lintCommand: 'stylelint "./src/**/*.css"'
      }
    })
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/application.ts',
        entryFileNames: 'ts/application.js',
        assetFileNames: (asset) => {
          return asset.names?.some((name) => {
            return name.endsWith('.css')
          })
            ? 'css/style[extname]'
            : 'css/[name][extname]'
        }
      }
    }
  }
}) satisfies UserConfig
