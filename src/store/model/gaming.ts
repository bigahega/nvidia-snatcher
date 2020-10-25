import { Store } from './store';

export const Gaming: Store = {
	labels: {
		inStock: {
			container: '.cart',
			text: ['sepete ekle']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.gaming.gen.tr/urun/5393/corsair-hs50-pro-stereo-siyah-gaming-kulaklik/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.gaming.gen.tr/urun/10086/asus-tuf-geforce-rtx-3080-10gb-gddr6x-320-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.gaming.gen.tr/urun/10225/asus-tuf-geforce-rtx-3090-24gb-gddr6x-384-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.gaming.gen.tr/urun/10273/asus-tuf-geforce-rtx-3090-24gb-oc-gddr6x-384-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url: 'https://www.gaming.gen.tr/urun/10148/asus-geforce-rog-strix-rtx-3080-gaming-10gb-gddr6x-320bit-dx12-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
			url: 'https://www.gaming.gen.tr/urun/10404/asus-rog-strix-geforce-rtx-3090-24gb-gddr6x-384-bit-ekran-karti/'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url: 'https://www.gaming.gen.tr/urun/10185/asus-geforce-rog-strix-rtx-3080-gaming-oc-10gb-gddr6x-320bit-dx12-ekran-karti/'
		}


	],
	name: 'gaming'
};
