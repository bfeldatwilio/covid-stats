// submission-created.js

// initialize the helper library client
const client = require("twilio")(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

exports.handler = function (event) {
	var data = JSON.parse(event.body).payload.data;
	return client.messages.create({
		from: process.env.BOT_NUMBER,
		to: data.phone,
		body:
			data.Country_Region +
			" Covid-19 total confirmed data as of " +
			data.Last_Update +
			".  " +
			data.Country_Region +
			" has " +
			data.Confirmed +
			" confirmed cases, and " +
			data.Deaths +
			" Deaths",
	});
};
