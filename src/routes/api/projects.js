export async function get({ params }) {
	const res = await fetch("https://cms.andrewbraun.dev/projects", {
		method: "GET",
		headers: {
			"CONTENT-TYPE": "application/json",
			Authorization: import.meta.env.VITE_STRAPI_JWT
		}
	});
	const data = await res.json();

	return { body: data };
}
