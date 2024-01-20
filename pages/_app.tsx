import 'nextra-theme-docs/style.css';
import '../styles/global.scss';

/*
 * Shim requestIdleCallback in Safari
 * if (typeof window !== 'undefined' && !('requestIdleCallback' in window)) {
 * 	window.requestIdleCallback = (fn) => setTimeout(fn, 1);
 * 	window.cancelIdleCallback = (e) => clearTimeout(e);
 * }
 */

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return getLayout(<Component {...pageProps} />);
}
