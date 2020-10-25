import { Store } from './store';

export const AmazonTr: Store = {
	labels: {
		inStock: {
			container: '#desktop_buybox',
			text: ['sepete ekle']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com.tr/dp/B07PRMZM7V/ref=s9_acss_bw_pg_WE15OFAP_2_i?pf_rd_m=A1UNQM1SR2CHM&pf_rd_s=merchandised-search-4&pf_rd_r=5BBPR6FXYN4TYH0B5CYV&pf_rd_t=101&pf_rd_p=d5fa545a-d075-4368-9b42-ccd3093fe812&pf_rd_i=21320088031'
		},

		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.com.tr/ASUS-GEFORCE-TUF-RTX3080-10G-GAMING-320bit-Express/dp/B08HN37VQK?ie=UTF8&language=tr_TR'
		},

	],
	name: 'amazon-tr'
};
