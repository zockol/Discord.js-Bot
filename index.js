const {Client, GatewayIntentBits, Collection} = require("discord.js");
const env = require("dotenv").config();
const deployCommands = require("./functions/SlashCommands/deploy-commands.js");
const interactionCreate = require("./functions/Interactions/interactionCreate.js");
const welcomeMessage = require("./functions/welcomeMessage/welcomeMessage.js");
const createJsons = require("./functions/createJsons/createJsons.js");
const fs = require("fs");
const voicebanCheck = require("./functions/voiceEvents/voicebanCheck.js");
const voiceActivity = require("./functions/voiceEvents/voiceActivity.js");

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates],
});

client.on("ready", () => {
	console.log("Bot is online");
	createJsons();
	deployCommands();
});

client.on("interactionCreate", async (interaction) => {
	interactionCreate(interaction, client);
});

client.on("guildMemberAdd", (member) => {
	welcomeMessage(member, client);
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
	voicebanCheck(oldMember,newMember)
	voiceActivity(oldMember, newMember)
})

client.login(process.env.TOKEN);
