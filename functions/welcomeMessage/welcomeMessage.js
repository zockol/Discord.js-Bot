const fs = require("fs");

module.exports = function (member, client) {
	const pathSettings = "\\..\\..\\jsons\\settings.json";
	var readSettings = fs.readFileSync(__dirname + pathSettings);
	var fileSettings = JSON.parse(readSettings);

	if (fileSettings[0].welcomeMessage == true) {
		client.channels.cache.get(fileSettings[0].Channel).send(`Welcome ${member.user.username}`);
	}
};
