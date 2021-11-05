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

/** @type {import('@sveltejs/kit').Config} */

import adapter from "@sveltejs/adapter-netlify";

const config = {
	extensions: [".svelte", ".md", ".svelte.md"],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte"
	}
};

export default config;
