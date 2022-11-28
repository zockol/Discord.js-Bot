const fs = require("fs");
const welcomeEmbed = require("../../embeds/welcomeEmbed.js");

module.exports = function (member, client) {
	const pathSettings = "\\..\\..\\jsons\\settings.json";
	var readSettings = fs.readFileSync(__dirname + pathSettings);
	var fileSettings = JSON.parse(readSettings);

	if (fileSettings["welcomeMessage"].Active == true) {
		welcomeEmbed(member, client.channels.cache.get(fileSettings["welcomeMessage"].Channel));
	}
};
