import ImageSingle from "@/images/ABFE-Single.jpg";
import ImageCombination from "@/images/ABFE-Combination.jpg";

export const config = {
	categories: [
		{ name: "Моноесенции", slug: "Australian-Bush-Flower-Essences-Single", image: ImageSingle },
		{ name: "Комбинации", slug: "Australian-Bush-Flower-Essences-Combination", image: ImageCombination },
	],

	social: {
		x: "https://x.com/essentify",
		facebook: "https://facebook.com/essentify",
	},

	contact: {
		email: "info@essentify.com",
		phone: "+359892375248",
		address: "София, България",
	},
};

export type StoreConfig = typeof config;
export default config;
