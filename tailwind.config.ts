import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.tsx',
    './nextra-theme-docs/**/*.tsx',
    './nextra-theme-docs/**/*.css',
    './nextra-theme-docs/**/*.scss',
    './pages/**/*.md',
    './pages/**/*.mdx',
    './pages/**/*.tsx',
    './pages/**/*.js',
    './theme.config.tsx',
    './styles.css',
    './styles.scss',
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {},
  },
} satisfies Config;
