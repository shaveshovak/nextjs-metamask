import { TitleProps } from '@/types';
import styles from './title.module.css';

export const Title = ({ title }: TitleProps) => {
	return (
		<>
			<h2 className={styles.title}>
				{title}
			</h2>
		</>
	);
}
