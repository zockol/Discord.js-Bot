const voiceban = require("./InteractionExecutes/voicebanCommand.js");
const welcome = require("./InteractionExecutes/welcomeCommand.js");
const activityBoard = require("./InteractionExecutes/activityBoardCommand.js");

module.exports = async function (interaction) {
	if (!interaction.isChatInputCommand()) return;

	const {commandName} = interaction;

	if (commandName === "ping") {
		await interaction.reply("Pong!");
	} else if (commandName === "settings") {
		var Option = interaction.options.getString("setting")
		if (Option == "welcome_message") {
			welcome(interaction);
		} else if (Option == "activity_board") {
			activityBoard(interaction)
		}
		
	} else if (commandName === "voiceban") {
		voiceban(interaction);
	}
};
