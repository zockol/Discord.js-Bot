module.exports = async function (interaction) {
	if (!interaction.isChatInputCommand()) return;

	const {commandName} = interaction;

	if (commandName === "ping") {
		await interaction.reply("Pong!");
	} else if (commandName === "beep") {
		await interaction.reply("Boop!");
	}
};
