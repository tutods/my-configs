/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.tsx',
		'./nextra-theme-docs/**/*.tsx',
		'./nextra-theme-docs/**/*.css',
		'./nextra-theme-docs/**/*.scss',
		'./pages/**/*.md',
		'./pages/**/*.mdx',
		'./pages/**/*.tsx',
		'./pages/**/*.js',
		'./theme.config.js',
		'./styles.css',
		'./styles.scss'
	],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: []
};
