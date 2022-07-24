import { env } from "../api-config";
export async function GET() {
	const res = await fetch(`https://cms.andrewbraun.dev/tags`, {
		method: "GET",
		headers: {
			"CONTENT-TYPE": "application/json",
			Authorization: env.strapiKey
		}
	});
	const data = await res.json();

	return { body: data };
}
