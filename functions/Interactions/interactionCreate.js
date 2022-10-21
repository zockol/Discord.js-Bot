const settings = require("./InteractionExecutes/settingsCommand.js");

module.exports = async function (interaction) {
	if (!interaction.isChatInputCommand()) return;

	const {commandName} = interaction;

	if (commandName === "ping") {
		await interaction.reply("Pong!");
	} else if (commandName === "settings") {
		settings(interaction);
	}
};
