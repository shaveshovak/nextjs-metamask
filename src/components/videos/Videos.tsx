import { Video } from './Video';
import styles from './video.module.css';

export const Videos = () => {

	const video_list = [
		{
			title: 'TRIBUTE STREET',
			image_url: 'video_1.png',
			video_url: 'punk-store-video'
		},
		{
			title: 'PUNK STORE',
			image_url: 'video_2.png',
			video_url: 'tribute-street-video'
		}
	]
	return (
		<section className={styles.store}>
			<h5 className={styles.video_list_title}>TRIBUTE STREET OPENING IN MONA STORE</h5>
			<div className={styles.video_list}>
				{
					video_list.map((item, i) => {
						return (
							<Video
								key={i}
								image={`/images/${item.image_url}`}
								title={item.title}
								video={`/videos/${item.video_url}.mp4`}
							/>
						)
					})
				}
			</div>
		</section>
	);
}
