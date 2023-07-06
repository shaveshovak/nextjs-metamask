import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import { ConnectBtn } from '../connect_btn/ConnectBtn';

export const Header = () => {
	return (
		<header className={styles.header_content}>
			<div className={styles.logo}>
				<Link href='/'>
					<Image
						src={'/images/logo.png'}
						alt='Logo'
						width={50}
						height={50}
					/>
				</Link>
			</div>
			<div className={styles.header_urls}>
				<Link href='/favorites' className={styles.favorite_url}>
					<svg width="20" height="20" viewBox="0 0 18 17" fill="transparent" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.5441 1.22992C8.72105 0.837014 9.27895 0.837012 9.4559 1.22992L11.0896 4.85742C11.3078 5.34188 11.7659 5.67477 12.2941 5.73257L16.2489 6.16533C16.6773 6.2122 16.8497 6.74279 16.5307 7.0325L13.5855 9.70718C13.1922 10.0644 13.0172 10.603 13.1254 11.1232L13.936 15.0182C14.0238 15.44 13.5724 15.768 13.1983 15.5541L9.74444 13.5796C9.28317 13.3159 8.71683 13.3159 8.25556 13.5796L4.80169 15.5541C4.42759 15.768 3.97624 15.44 4.06403 15.0182L4.87455 11.1232C4.9828 10.603 4.80779 10.0644 4.41446 9.70718L1.46934 7.0325C1.15034 6.74279 1.32274 6.2122 1.7511 6.16533L5.70589 5.73257C6.23406 5.67477 6.69224 5.34188 6.91042 4.85742L8.5441 1.22992Z" fill="none" stroke="black"/>
					</svg>
					<span>favorites</span>
				</Link>
				<ConnectBtn />
			</div>
		</header>
	);
}
