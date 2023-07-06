import { ConnectBtn } from '@/components/connect_btn/ConnectBtn';
import React, { useEffect, useState } from 'react';
import styles from './main.module.css';
import { Card } from '@/components/card/Card';
import { getLocalStorageItem } from '@/utils';
import { useAuthentication } from '@/hooks/authentication';
import { CardProps } from '@/types';

const FavoritesPage = () => {

	const { wallet } = useAuthentication()

	const [favoritesArray, setFavoritesArray] = useState<CardProps[]>([]);

  	useEffect(() => {
    const storedData = getLocalStorageItem("favorites");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFavoritesArray(parsedData);
    }
  	}, []);

	console.log(favoritesArray)
	return (
		<main>
			<h2 className={styles.favorite_title}>FAVORITES</h2>
			{
				(wallet.accounts.length > 0) ? (
					<section className={styles.favorite_list}>
						{
							favoritesArray.map((item, i) => {
								return (
									<Card
										key={i}
										gallery_type={item.title}
										title={item.title}
										image_url={item.image_url}
										isFavorite={item.isFavorite}
									/>
								)
							})
						}
					</section>
				) : (
					<>
						<p className={styles.favorite_sub_title}>Connect to see your favorite digital fashion assets</p>
						<ConnectBtn />
					</>
				)
			}


		</main>
  	)
};

export default FavoritesPage;
