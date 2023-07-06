export interface TitleProps {
	title: string
}

export interface VideoProps {
	image: string,
	title: string,
	video: string
}

export interface CardProps {
	gallery_type: string,
	title: string,
	image_url: string,
	handleFavorite?: () => void,
	isFavorite?: boolean
}

export interface GalleryProps {
	cards_list: CardProps[],
	title: string,
	year: number
}
