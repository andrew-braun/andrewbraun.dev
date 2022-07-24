export const env = {
	strapiKey: import.meta.env.VITE_STRAPI_JWT
	// strapiKey: process.env.VITE_STRAPI_JWT
};

export async function getStrapiJWT() {
	const requestData = {
		identifier: import.meta.env.VITE_ABDEV_STRAPI_USER,
		password: import.meta.env.VITE_ABDEV_STRAPI_PASSWORD
	};

	const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/local`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(requestData)
	});

	const data = await response.json();

	const token = data.jwt;

	return token;
}
