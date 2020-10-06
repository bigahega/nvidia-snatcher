import { Store } from './store';

export const GameGraj: Store = {
	labels: {
		inStock: {
			container: '.single_add_to_cart_button.button.alt',
			text: ['sepete ekle']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.gamegaraj.com/urun/asus-prime-b450m-k-4400mhz-oc-am4-matx-2/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.gamegaraj.com/urun/asus-tuf-rtx3090-o24g-gaming-24gb-384bit-gddr6x-2/'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3080-gamingpro-10gb-320bit-gddr6x-2/'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
			url: 'https://www.gamegaraj.com/urun/palit-rtx3090-gamingpro-24gb-384bit-gddr6x/'
		},
		{
			brand: 'inno3d',
			model: 'ichill',
			series: '3080',
			url: 'https://www.gamegaraj.com/urun/inno3d-rtx3080-ichill-x4-10gb-320bit-gddr6x-2/'
		},
		{
			brand: 'inno3d',
			model: 'ichill',
			series: '3090',
			url: 'https://www.gamegaraj.com/urun/inno3d-rtx3090-ichill-x3-24gb-384bit-gddr6x/'
		}

	],
	name: 'gamegaraj'
};
