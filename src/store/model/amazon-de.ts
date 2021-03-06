import {Store} from './store';

export const AmazonDe: Store = {
	backoffStatusCodes: [403, 429, 503],
	labels: {
		captcha: {
			container: 'body',
			text: ['geben sie die unten angezeigten zeichen ein', 'geben sie die zeichen unten ein']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['in den einkaufswagen']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]',
			euroFormat: true
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.de/dp/B083JX52VG/'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN7VVLJ'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN6KYS3'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN37VQK'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HN4DSTC'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGBYWQ6'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGYXP4C'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HGLN78Q'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HH1BMQQ'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HJ9XFNM'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08KHLDS72'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HHZVZ3N'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HLZXHZY'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08KH7RL89'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08JD6QPXD'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HM4V2DH'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HM4M621'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08JCVWTQY'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08JCKYYL8'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url: 'https://www.amazon.de/dp/B08HR1NPPQ'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN642LY'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN51T8Q'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN4FLFJ'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HN5B8FJ'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGFNPJQ'
		},
		{
			brand: 'evga',
			model: 'ftw3',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08J5NMDP7'
		},
		{
			brand: 'evga',
			model: 'ftw3 ultra',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGS1SXH'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGZ4XSZ'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGKQ527'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HGTNDL4'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08KH7R4FQ'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HJPDJTY'
		},
		{
			brand: 'gigabyte',
			model: 'turbo',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08KHKDTSJ'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HJRF2CN'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HRBW6VB'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HM661YM'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08JQQ1VD1'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HR6ZBYJ'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.amazon.de/dp/B08HJQ182D'
		},
		{
			brand: 'asus',
			model: 'dual',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HSJ1622'
		},
		{
			brand: 'asus',
			model: 'dual oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KHFZN9P'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HT7PR9Y'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L8JNTXQ'
		},
		{
			brand: 'msi',
			model: 'ventus 2x oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KWPDXJZ'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L6PCZTR'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KWN2LZG'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08M13DXSZ'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KHL21CV'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08KHL2J5X'
		},
		{
			brand: 'evga',
			model: 'xc3 black',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L3QCZKZ'
		},
		{
			brand: 'evga',
			model: 'xc3',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L3QZP7W'
		},
		{
			brand: 'evga',
			model: 'xc3 ultra',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08L3Q41SM'
		},
		{
			brand: 'zotac',
			model: 'twin edge',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HRBR7K9'
		},
		{
			brand: 'zotac',
			model: 'twin edge oc',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08LBVNKT1'
		},
		{
			brand: 'pny',
			model: 'dual fan',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HBF5L3K'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3070',
			url: 'https://www.amazon.de/dp/B08HBJB7YD'
		},
		{
			brand: 'xfx',
			model: 'merc 319',
			series: '6800xt',
			url: 'https://www.amazon.de/-/tr/dp/B08NX14LV1/ref=sr_1_1?__mk_tr_TR=ÅMÅŽÕÑ&dchild=1&keywords=6800&qid=1611590146&refinements=p_n_availability%3A419126031&rnid=419124031&s=computers&sr=1-1'
		},
		{
			brand: 'sapphire',
			model: 'nitro+',
			series: '6800xt',
			url: 'https://www.amazon.de/-/tr/dp/B08NX6KLX2/ref=sr_1_4?__mk_tr_TR=ÅMÅŽÕÑ&dchild=1&keywords=6800&qid=1611590146&refinements=p_n_availability%3A419126031&rnid=419124031&s=computers&sr=1-4'
		},
		{
			brand: 'gigabyte',
			model: 'reference',
			series: '6800xt',
			url: 'https://www.amazon.de/-/tr/dp/B08NS4W2ZY/ref=sr_1_7?__mk_tr_TR=ÅMÅŽÕÑ&dchild=1&keywords=6800&qid=1611590146&refinements=p_n_availability%3A419126031&rnid=419124031&s=computers&sr=1-7'
		},
		{
			brand: 'powercolor',
			model: 'red devil limited',
			series: '6800xt',
			url: 'https://www.amazon.de/-/tr/dp/B08P2BQRLW/ref=sr_1_15?__mk_tr_TR=ÅMÅŽÕÑ&dchild=1&keywords=6800&qid=1611590146&refinements=p_n_availability%3A419126031&rnid=419124031&s=computers&sr=1-15'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '6800xt',
			url: 'https://www.amazon.de/-/tr/dp/B08QCLRN7S/ref=sr_1_16?__mk_tr_TR=ÅMÅŽÕÑ&dchild=1&keywords=6800&qid=1611590146&refinements=p_n_availability%3A419126031&rnid=419124031&s=computers&sr=1-16'
		},
		{
			brand: 'sapphire',
			model: 'reference',
			series: '6800xt',
			url: 'https://www.amazon.de/-/tr/dp/B08MVC76SR/ref=sr_1_18?__mk_tr_TR=ÅMÅŽÕÑ&dchild=1&keywords=6800&qid=1611590146&refinements=p_n_availability%3A419126031&rnid=419124031&s=computers&sr=1-18'
		}
	],
	name: 'amazon-de'
};
