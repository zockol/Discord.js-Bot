const {SlashCommandBuilder} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("voiceban")
		.setDescription("banning a servermember from joining voice channels")
        .addUserOption(option =>
			option.setName("user").setDescription("user to voiceban").setRequired(true)),
};
