import { AppProps } from 'next/app';

import '@styles/global.scss';
import 'nextra-theme-docs/style.css';
import '@styles/custom.scss';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
