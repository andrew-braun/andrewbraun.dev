import { env } from "../api-config";
export async function GET({ params }) {
	const { tagname } = params;
	const res = await fetch(`https://cms.andrewbraun.dev/tags?slug=${tagname}`, {
		method: "GET",
		headers: {
			"CONTENT-TYPE": "application/json",
			Authorization: env.strapiKey
		}
	});
	const data = await res.json();

	return { body: data };
}
