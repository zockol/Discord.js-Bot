const fs = require("fs");

module.exports = async function (interaction) {
	const pathSettings = "\\..\\..\\..\\jsons\\settings.json";
	var readSettings = fs.readFileSync(__dirname + pathSettings);
	var fileSettings = JSON.parse(readSettings);

	var interactionChannel = interaction.channelId;
	var interactionBool = interaction.options.getBoolean("active");

	if (!fileSettings["welcomeMessage"]) {
        fileSettings["welcomeMessage"] = {Active: interactionBool, Channel: interactionChannel}
		if (!interactionBool) {
			interaction.reply(`Welcome Messages are not active yet!`)
		} else {
			interaction.reply(`Welcome Messages are now posted in <#${interactionChannel}>!`);
		}
        
    } else {
		fileSettings["welcomeMessage"].Active = interactionBool;
		fileSettings["welcomeMessage"].Channel = interactionChannel;

		if (interactionBool == true) {
			interaction.reply(`Welcome Messages are now posted in <#${interactionChannel}>!`);
		} else {
			interaction.reply("Welcome Message are now disabled");
		}
	}

	fs.writeFileSync(__dirname + pathSettings, JSON.stringify(fileSettings, null, 2)); //if not, create it
};
