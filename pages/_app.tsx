import { AppProps } from 'next/app';

import 'nextra-theme-docs/style.css';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}