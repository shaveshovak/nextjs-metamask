import Link from 'next/link';
import { TbMailIcon, InstagramIcon, TwitterIcon, TiktokIcon, LinkedInIcon, DiscordIcon } from "public/images/Images"
import styles from './footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer_container}>
			<ul className={styles.social_icons}>
				<Link href='/' className={styles.social_icon}><TbMailIcon /></Link>
				<Link href='/' className={styles.social_icon}><InstagramIcon /></Link>
				<Link href='/' className={styles.social_icon}><TwitterIcon /></Link>
				<Link href='/' className={styles.social_icon}><TiktokIcon /></Link>
				<Link href='/' className={styles.social_icon}><LinkedInIcon /></Link>
				<Link href='/' className={styles.social_icon}><DiscordIcon /></Link>
			</ul>

			<ul className={styles.quick_urls}>
				<Link href='/' className={styles.quick_url}>About</Link>
				<Link href='/' className={styles.quick_url}>Fitting Guide</Link>
				<Link href='/' className={styles.quick_url}>Terms and Conditions</Link>
				<Link href='/' className={styles.quick_url}>Privacy Policy</Link>
				<Link href='/' className={styles.quick_url}>Payments</Link>
			</ul>
		</footer>
	)
}

