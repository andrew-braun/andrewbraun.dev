import { env, getStrapiJWT } from "./api-config";

export async function GET({ url }) {
	const queryString = url.searchParams.toString().replace("-", " ");
	const strapiJWT = await getStrapiJWT();

	const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?${queryString}`, {
		method: "GET",
		headers: {
			"CONTENT-TYPE": "application/json",
			Authorization: `Bearer ${strapiJWT}`
		}
	});
	const data = await res.json();

	return { body: data };
}
