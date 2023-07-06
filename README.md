Tribute Brand coding task

## Getting Started

First install the dependencies by running `npm install`

Run the development server:

```bash
npm run dev
```

## Description

I have used local environment - https://docs.metamask.io/wallet/tutorials/react-dapp-local-state/

For testing, please install metamask extension on Google Chrome and you will be able to login

MetaMask Extension - https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn

I have used mocked data, as you see the structure of it, on the favorite you will be able to add from each object, as soon as you choose from the another it will removed previous.:
<code>
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
</code>
