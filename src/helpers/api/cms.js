async function fetchProjects() {
	const url = `https://cms.andrewbraun.dev/projects`;

	try {
		const res = await fetch(url, {
			method: "GET",
			headers: {
				"CONTENT-TYPE": "application/json",
				Authorization: import.meta.env.VITE_STRAPI_JWT
			}
		});
		const projects = await res.json();

		return projects;
	} catch (error) {
		console.log(error);
	}
}

export { fetchProjects };
