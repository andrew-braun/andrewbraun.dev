import { env, getStrapiJWT } from "../api-config";
export async function GET({}) {
	const strapiJWT = await getStrapiJWT();

	const res = await fetch(`${import.meta.env.VITE_API_URL}/tags`, {
		method: "GET",
		headers: {
			"CONTENT-TYPE": "application/json",
			Authorization: `Bearer ${strapiJWT}`
		}
	});
	const data = await res.json();

	return { body: data };
}
