import { CardProps } from '@/types';
import Image from 'next/image';
import styles from './card.module.css';
import { StarIcon } from 'public/images/Images';
import { useAuthentication } from '@/hooks/authentication';

export const Card = ({ gallery_type, title, image_url, handleFavorite, isFavorite }: CardProps) => {
	const { wallet } = useAuthentication()

	return (
		<div className={styles.card_item}>
			<p className={styles.gallery_type}>{gallery_type}</p>
			<Image
				src={`/images/${image_url}`}
				alt='Logo'
				width={250}
				height={200}
				className={styles.card_image}
			/>
			<p className={styles.card_title}>
				<span>{title}</span>

				{
					wallet.accounts.length > 0 && (
						<button
							onClick={handleFavorite}
							className={isFavorite ? styles.star_icon : ''}
						>
							<StarIcon />
						</button>
					)
				}
			</p>
		</div>
	)
}
