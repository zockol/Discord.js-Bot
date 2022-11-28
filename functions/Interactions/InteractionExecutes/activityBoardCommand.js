const fs = require("fs");

module.exports = async function (interaction) {
	const pathSettings = "\\..\\..\\..\\jsons\\settings.json";
	var readSettings = fs.readFileSync(__dirname + pathSettings);
	var fileSettings = JSON.parse(readSettings);

	var interactionChannel = interaction.channelId;
	var interactionBool = interaction.options.getBoolean("active");

	if (!fileSettings["activityBoard"]) {
        fileSettings["activityBoard"] = {Active: interactionBool, Channel: interactionChannel}
		if (!interactionBool) {
			interaction.reply(`Activity Board is not active yet!`)
		} else {
			interaction.reply(`Activity Board is now posted in <#${interactionChannel}>!`);
		}
        
    } else {
		fileSettings["activityBoard"].Active = interactionBool;
		fileSettings["activityBoard"].Channel = interactionChannel;

		if (interactionBool == true) {
			interaction.reply(`Activity Board is now posted in <#${interactionChannel}>!`);
		} else {
			interaction.reply("Activity Board is now disabled");
		}
	}

	fs.writeFileSync(__dirname + pathSettings, JSON.stringify(fileSettings, null, 2)); //if not, create it
};
