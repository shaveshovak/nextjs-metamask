import { GalleryItems } from '@/components/gallery/GalleryItemsList';
import { Title } from '@/components/title/Title';
import { Videos } from '@/components/videos/Videos';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Coding task</title>
				<meta name="description" content="Frontend coding task" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Title title='Punk store is open' />
				<Videos />
				<GalleryItems />
			</main>
		</>
	);
}
