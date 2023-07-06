import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
	return(
		<div style={{ padding: '40px' }}>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	)
}
