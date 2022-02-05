const Mailgun = require("mailgun.js");
const formData = require("form-data");

exports.handler = async function (event, context) {
	const domain = process.env.VITE_MAILGUN_DOMAIN;
	const apiKey = process.env.VITE_MAILGUN_KEY;

	const mailgun = new Mailgun(formData);

	const mg = mailgun.client({
		username: "api",
		key: apiKey,
		url: "https://api.eu.mailgun.net" || ""
	});

	const data = {
		from: `Andrew Braun <andrew@mail.andrewbraun.dev>`,
		to: "andrew@andrewbraun.dev",
		subject: "Hello",
		text: "Testing some Mailgun awesomness!"
	};

	try {
		await mg.messages.create(domain, data);

		return { statusCode: 200, body: "Success!" };
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify(error)
		};
	}

	// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

	// You can send up to 300 emails/day from this sandbox server.
	// Next, you should add your own domain so you can send 10000 emails/month for free.
	// return {
	// 	statusCode: 200,
	// 	body: JSON.stringify({ message: "Hello World" })
	// };
};
