/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './config/theme.config.jsx',
	unstable_staticImage: true,
	pages: 'src/pages'
});

module.exports = withNextra();
