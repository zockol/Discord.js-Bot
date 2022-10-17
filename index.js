const {Client, GatewayIntentBits, Collection} = require("discord.js");
const env = require("dotenv").config();
const deployCommands = require("./functions/SlashCommands/deploy-commands.js");
const interactionCreate = require("./functions/Interactions/interactionCreate.js");
const fs = require("fs");

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

const pathSettings = "\\jsons\\settings.json";
var readSettings = fs.readFileSync(__dirname + pathSettings);
var fileSettings = JSON.parse(readSettings);

client.on("ready", () => {
	console.log("Bot is online");
	deployCommands();
});

client.on("interactionCreate", async (interaction) => {
	interactionCreate(interaction);
});

client.on("guildMemberAdd", (member) => {
	console.log("trest");
	if (fileSettings[0].welcomeMessage == 1) {
		client.channels.cache.get(fileSettings[0].Channel).send(`Welcome`);
	}
});

client.login(process.env.TOKEN);
