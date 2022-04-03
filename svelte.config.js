import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
// import adapter from "@sveltejs/adapter-netlify";

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		adapter: adapter(),
// 		target: "#svelte"
// 	}
// };

// export default config;

import adapter from "@sveltejs/adapter-netlify";

export default {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter({
			split: false
		}) // currently the adapter does not take any options
	},

	preprocess: [mdsvex(mdsvexConfig)]
};
