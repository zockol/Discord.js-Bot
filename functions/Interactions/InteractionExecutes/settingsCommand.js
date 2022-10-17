const fs = require("fs");

module.exports = async function (interaction) {
	const pathSettings = "\\..\\..\\..\\jsons\\settings.json";
	var readSettings = fs.readFileSync(__dirname + pathSettings);
	var fileSettings = JSON.parse(readSettings);

	var interactionChannel = interaction.channelId;
	var interactionBool = interaction.options.getBoolean("active");
	fileSettings[0].welcomeMessage = interactionBool;
	fileSettings[0].Channel = interactionChannel;
	fs.writeFileSync(__dirname + pathSettings, JSON.stringify(fileSettings, null, 2)); //if not, create it
	if (interactionBool == true) {
		interaction.reply(`Welcome Messages are now posted in <#${interactionChannel}>!`);
	} else {
		interaction.reply("Welcome Message are now disabled");
	}
};
