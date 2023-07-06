'use client'
import { useState } from "react";
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react';
import { Card } from "../card/Card";
import { DownArrowIcon, RightArrowIcon } from "public/images/Images";
import { CardProps, GalleryProps } from "@/types";
import '@coreui/coreui/dist/css/coreui.min.css';
import styles from './gallery.module.css';

export const GalleryItem = ({ title, cards_list, year }: GalleryProps) => {
	const [visible, setVisible] = useState(false);
	const [favorites, setFavorites] = useState<CardProps[]>([]);

	const handleFavorite = (card: CardProps) => {
	  const isAlreadyFavorited = favorites.some(
		(favorite) => favorite.title === card.title
	  );

	  if (isAlreadyFavorited) {
		const updatedFavorites = favorites.filter(
		  (favorite) => favorite.title !== card.title
		);
		setFavorites(updatedFavorites);
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	  } else {
		setFavorites((prevFavorites) => [...prevFavorites, card]);
		localStorage.setItem(
		  'favorites',
		  JSON.stringify([...favorites, card])
		);
	  }
	};

	return (
	  <>
		<CButton
		  onClick={() => setVisible(!visible)}
		  className={styles.collapse_btn}
		>
		  <p>
			{title}
			{visible ? <DownArrowIcon /> : <RightArrowIcon />}
		  </p>
		  <p className={styles.collapse_year}>{year}</p>
		</CButton>
		<CCollapse visible={visible}>
		  <CCard className={styles.card}>
			<CCardBody className={styles.card_container}>
			  {cards_list?.map((card, i) => {
				const isFavorite = favorites.some(
				  (favorite) => favorite.title === card.title
				);

				return (
				  <Card
					key={i}
					gallery_type={title}
					title={card.title}
					image_url={card.image_url}
					handleFavorite={() => handleFavorite(card)}
					isFavorite={isFavorite}
				  />
				);
			  })}
			</CCardBody>
		  </CCard>
		</CCollapse>
	  </>
	);
  };
