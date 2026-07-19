import tailwindcss from '@tailwindcss/vite'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, UserConfig } from 'vite'
import checker from 'vite-plugin-checker'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import vituum from 'vituum'

const resolvePath = (dir: string) => {
  return fileURLToPath(new URL(dir, import.meta.url))
}

export default defineConfig({
  server: {
    port: 9000
  },
  resolve: {
    alias: {
      '@scripts': resolvePath('./src/scripts'),
      '@utils': resolvePath('./src/scripts/utils')
    }
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
        lintCommand: 'eslint "./src/**/*.{js,ts}"'
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
        chunkFileNames: 'js/application.js',
        entryFileNames: 'js/application.js',
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
