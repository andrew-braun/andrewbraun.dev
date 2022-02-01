exports.handler = async function (event, context) {
	const mailgun = require("mailgun-js");
	const DOMAIN = process.env.VITE_MAILGUN_DOMAIN;
	const mg = mailgun({
		apiKey: process.env.VITE_MAILGUN_KEY,
		domain: DOMAIN
	});
	const data = {
		from: `Mailgun Sandbox <postmaster@${process.env.VITE_MAILGUN_DOMAIN}>`,
		to: "andrew@andrewbraun.dev",
		subject: "Hello",
		text: "Testing some Mailgun awesomness!"
	};

	try {
		mg.messages().send(data, function (error, body) {
			return { statusCode: 200, body: JSON.stringify({ message: body }) };
			// console.log(body);
		});
	} catch (error) {
		return { statusCode: 400, body: JSON.stringify({ error: error }) };
	}

	// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

	// You can send up to 300 emails/day from this sandbox server.
	// Next, you should add your own domain so you can send 10000 emails/month for free.
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "Hello World" })
	};
};
