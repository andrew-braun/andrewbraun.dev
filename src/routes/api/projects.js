export async function get({ params, query }) {
	const queryString = query.toString().replace("-", " ");
	const res = await fetch(`https://cms.andrewbraun.dev/projects?${queryString}`, {
		method: "GET",
		headers: {
			"CONTENT-TYPE": "application/json",
			Authorization: import.meta.env.VITE_STRAPI_JWT
		}
	});
	const data = await res.json();

	return { body: data };
	// return { body: query };
}
