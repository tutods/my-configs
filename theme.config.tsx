import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
	logo: <span>My Project</span>,
	project: {
		link: 'https://github.com/tutods/my-configs'
	},
	docsRepositoryBase: 'https://github.com/tutods/my-configs/blob/master',
	editLink: {
		component: null
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
	feedback: {
		content: undefined
	},
	useNextSeoProps() {
		return {
			titleTemplate: '%s – TutoDS Configs'
		};
	}
};

export default config;
