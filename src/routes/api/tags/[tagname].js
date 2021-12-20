import { env } from "../api-config";
export async function get({ params }) {
	const { tagname } = params;
	const res = await fetch(`https://cms.andrewbraun.dev/tags?slug=${tagname}`, {
		method: "GET",
		headers: {
			"CONTENT-TYPE": "application/json",
<<<<<<< HEAD
			Authorization: env.strapiKey
=======
			Authorization: process.env.VITE_STRAPI_JWT
>>>>>>> d0d29c2df0b808ef0a2725e11b553a3b2674fc88
		}
	});
	const data = await res.json();

	return { body: data };
}
