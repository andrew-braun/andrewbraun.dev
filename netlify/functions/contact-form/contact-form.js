exports.handler = async function (event, context) {
	const mailgun = require("mailgun-js");
	const DOMAIN = import.meta.env.VITE_MAILGUN_DOMAIN;
	const mg = mailgun({
		apiKey: import.meta.env.VITE_MAILGUN_KEY,
		domain: DOMAIN
	});
	const data = {
		from: `Mailgun Sandbox <postmaster@${import.meta.env.VITE_MAILGUN_DOMAIN}>`,
		to: "andrew@andrewbraun.dev",
		subject: "Hello",
		text: "Testing some Mailgun awesomness!"
	};
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});

	// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

	// You can send up to 300 emails/day from this sandbox server.
	// Next, you should add your own domain so you can send 10000 emails/month for free.
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "Hello World" })
	};
};
