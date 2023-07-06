import { VideoProps } from '@/types';
import HoverVideoPlayer from 'react-hover-video-player';
import styles from './video.module.css';
import Image from 'next/image';

export const Video = ({ image, title, video }: VideoProps) => {
	return (
		<div className={styles.video_item}>
			<HoverVideoPlayer
      			videoSrc={video}
      			pausedOverlay={
					<Image
						src={image}
						alt={title}
						width={800}
						height={500}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
      			}
      			loadingOverlay={
						<div className="loading-overlay">
						<div className="loading-spinner" />
					</div>
      			}
    		/>
			<div className={styles.video_descr}>
				<span>{title}</span>
				<button type="submit">Submit</button>
			</div>
		</div>
	);
}
