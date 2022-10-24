module.exports = {
	github: 'https://github.com/tutods/my-configs',
	docsRepositoryBase: 'https://github.com/tutods/my-configs/blob/master',
	titleSuffix: ' | TutoDS',
	logo: (
		<>
			<span className={'mr-2 hidden font-extrabold md:inline'}>TutoDS</span>
			<span className={'hidden font-normal text-gray-600 md:inline'}>
				My Configurations for Zsh, Fish and others..
			</span>
		</>
	),
	head: (
		<>
			<meta content={'#ffffff'} name={'msapplication-TileColor'} />
			<meta content={'#ffffff'} name={'theme-color'} />
			<meta content={'width=device-width, initial-scale=1.0'} name={'viewport'} />
			<meta content={'en'} httpEquiv={'Content-Language'} />
			<meta content={'Nextra: the Next.js site builder'} name={'description'} />
			<meta content={'Nextra: the Next.js site builder'} name={'og:description'} />
			<meta content={'summary_large_image'} name={'twitter:card'} />
			<meta content={'https://nextra.vercel.app/og.png'} name={'twitter:image'} />
			<meta content={'musketgeeks.netlify.app'} name={'twitter:site:domain'} />
			<meta content={'https://musketgeeks.netlify.app'} name={'twitter:url'} />
			<meta content={'musketgeeks: Project Documentation'} name={'og:title'} />
			<meta content={'https://nextra.vercel.app/og.png'} name={'og:image'} />
			<meta content={'musketgeeks'} name={'apple-mobile-web-app-title'} />
			<link href={'/apple-icon-180x180.png'} rel={'apple-touch-icon'} sizes={'180x180'} />
			<link
				href={'/android-icon-192x192.png'}
				rel={'icon'}
				sizes={'192x192'}
				type={'image/png'}
			/>
			<link href={'/favicon-32x32.png'} rel={'icon'} sizes={'32x32'} type={'image/png'} />
			<link href={'/favicon-96x96.png'} rel={'icon'} sizes={'96x96'} type={'image/png'} />
			<link href={'/favicon-16x16.png'} rel={'icon'} sizes={'16x16'} type={'image/png'} />
			<meta content={'/ms-icon-144x144.png'} name={'msapplication-TileImage'} />
		</>
	),
	search: true,
	prevLinks: true,
	nextLinks: true,
	footer: true,
	footerEditLink: false,
	footerText: (
		<>
			MIT <strong>{new Date().getFullYear()} © TutoDS.</strong>
		</>
	)
};
