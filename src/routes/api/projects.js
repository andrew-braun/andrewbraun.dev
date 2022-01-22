import { env } from "./api-config";

export async function get({ url }) {
	const queryString = url.searchParams.toString().replace("-", " ");
	const res = await fetch(`https://cms.andrewbraun.dev/projects?${queryString}`, {
		method: "GET",
		headers: {
			"CONTENT-TYPE": "application/json",
			Authorization: env.strapiKey
		}
	});
	const data = await res.json();

	return { body: data };
}
