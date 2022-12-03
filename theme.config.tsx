import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
	logo: (
		<>
			<span className={'mr-2 hidden font-extrabold md:inline'}>TutoDS</span>
			<span className={'hidden font-normal text-gray-600 md:inline'}>
				My Configurations for Fish, ZSH and more..
			</span>
		</>
	),
	project: {
		link: 'https://github.com/tutods/my-configs'
	},
	docsRepositoryBase: 'https://github.com/tutods/my-configs/blob/master',
	editLink: {
		component: undefined
	},
	footer: {
		text: (
			<>
				MIT &nbsp;<strong>{new Date().getFullYear()} © TutoDS</strong>. Created using&nbsp;
				<a
					className={'underline'}
					href={'https://nextra.site/'}
					rel={'noreferrer'}
					target={'_blank'}
				>
					Nextra
				</a>
				.
			</>
		)
	},
	head: (
		<>
			<meta content={'width=device-width, initial-scale=1.0'} name={'viewport'} />
			<meta content={'en'} httpEquiv={'Content-Language'} />
			<meta content={'TudoDS Configs. for Fish, ZSH and others'} name={'description'} />
			<meta content={'TudoDS Configs. for Fish, ZSH and others'} name={'og:description'} />
			<meta content={'summary_large_image'} name={'twitter:card'} />
			<meta content={'https://my-configs.vercel.app/og.png'} name={'twitter:image'} />
			<meta content={'my-configs.vercel.app'} name={'twitter:site:domain'} />
			<meta content={'https://my-configs.vercel.app'} name={'twitter:url'} />
			<meta content={'TutoDS | My Configs'} name={'og:title'} />
			<meta content={'https://my-configs.vercel.app/og.png'} name={'og:image'} />
			<meta content={'TutoDS | My Configs'} name={'apple-mobile-web-app-title'} />
		</>
	),
	feedback: {
		content: undefined
	},
	useNextSeoProps() {
		return {
			titleTemplate: '%s | TutoDS Configs'
		};
	}
};

export default config;
