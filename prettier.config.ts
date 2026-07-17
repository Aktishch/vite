import type { Config } from 'prettier'

export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'auto',
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: ['**/*.html', '**/*.njk'],
      options: {
        parser: 'html'
      }
    },
    {
      files: '**/*.json',
      options: {
        parser: 'json'
      }
    }
  ]
} satisfies Config
