<script>
	export let name;
	export let width = "2rem";
	export let height = "2rem";
	export let strokeColor = "black";
	export let fillColor = "var(--color-2)";
	export let hoverColor;
	export let strokeWidth = "1";
	export let focusable = false;
	export let strokeLinecap = "round";
	export let strokeLinejoin = "round";
	export let viewBox = "0 0 24 24";

	let icons = {
		facebook: {
			name: "facebook",
			svg: `<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>`,
			fillColor: "#1877f2"
		},
		twitter: {
			name: "twitter",
			svg: `<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>`,
			fillColor: "#1da1f2"
		},
		codepen: {
			name: "codepen",
			svg: `<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>`
		},
		email: {
			name: "email",
			svg: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>`,
			fillColor: "var(--color-3)"
		},
		linkedin: {
			name: "linkedin",
			svg: `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>`,
			fillColor: "#0a66c2"
		},
		github: {
			name: "github",
			svg: `<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>`,
			fillColor: "#9CDAF0"
		},
		polywork: {
			name: "polywork",
			svg: `<path d="M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z"/>`
		},
		message: {
			name: "message",
			svg: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>`
		},
		tool: {
			name: "tool",
			svg: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>`
		},
		info: {
			name: "info",
			svg: `<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>`
		},
		upChevron: {
			name: "up-chevron",
			svg: `<polyline points="18 15 12 9 6 15"></polyline>`
		}
	};
	let displayIcon = icons[name];

	const changeIconColor = () => {
		const activeFillColor = hoverColor ?? icons[name].fillColor;
		const activeStrokeColor = hoverColor ? "black" : activeFillColor;

		fillColor = activeFillColor ?? "var(--accent-1)";
		strokeColor = activeStrokeColor ?? "black";
	};

	const handleMouseOver = (event) => {
		changeIconColor();
	};
	const handleMouseOut = (event) => {
		fillColor = "var(--color-2)";
		strokeColor = "black";
	};
</script>

<svg
	class={$$props.class}
	{focusable}
	{width}
	{height}
	stroke={strokeColor}
	fill={fillColor}
	hoverColor
	stroke-width={strokeWidth}
	stroke-linejoin={strokeLinejoin}
	stroke-linecap={strokeLinecap}
	{viewBox}
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
	on:focus={handleMouseOver}
	on:blur={handleMouseOut}
	>{@html displayIcon.svg}
</svg>
