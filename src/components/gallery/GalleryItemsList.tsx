import { GalleryItem } from "./GalleryItem";
import styles from './gallery.module.css';

export const GalleryItems= () => {
	const arr = [
		{
			title: 'ROLE PLAY',
			year: 2022,
			cards: [{
				title: "ALEXA-JIN",
				image_url: "BUBA_SANTAS KISS_1200.png",
				gallery_type: 'ROLE PLAY',
				isLoggedIn: true
			},
			{
				title: "CRYSTAL-JIN",
				image_url: "image_2.png",
				gallery_type: 'ROLE PLAY',
				isLoggedIn: true
			},
			{
				title: "AMBER-JIN",
				image_url: "image_3.png",
				gallery_type: 'ROLE PLAY',
				isLoggedIn: true
			}]
		},
		{
			title: 'Pepa Paris',
			year: 2021,
			cards: [{
				title: "PERO",
				image_url: "image_4.png",
				gallery_type: 'Pepa Paris',
				isLoggedIn: true
			},
			{
				title: "PEPA",
				image_url: "image_5.png",
				gallery_type: 'Pepa Paris',
				isLoggedIn: false
			},
			{
				title: "LEPA",
				image_url: "image_5.png",
				gallery_type: 'Pepa Paris',
				isLoggedIn: false
			}]
		}
	]

	return (
		<section className={styles.gallery}>
			{
				arr.map((arr_item, i) => {
					return (
						<GalleryItem
							key={i}
							title={arr_item.title}
							cards_list={arr_item.cards}
							year={arr_item.year}
						/>
					)
				})
			}
  		</section>
	)
}
