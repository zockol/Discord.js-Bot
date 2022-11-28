const {SlashCommandBuilder} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("settings")
		.setDescription("Set up a few possible commands and stuff here!")
		.addStringOption((option) =>
			option.setName("setting").setDescription("What setting do you want to change?").setRequired(true).addChoices({
				name: "welcomeMessage",
				value: "welcome_message",
			},{
				name: "activityBoard",
				value: "activity_board"
			})
		)
		.addBooleanOption((option) => option.setName("active").setDescription("set the setting to active (true) or inactive (false)").setRequired(true)),
};
