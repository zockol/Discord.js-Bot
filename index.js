const {Client, GatewayIntentBits, Collection} = require("discord.js");
const env = require("dotenv").config();
const deployCommands = require("./functions/SlashCommands/deploy-commands.js");
const interactionCreate = require("./functions/Interactions/interactionCreate.js");

const client = new Client({intents: GatewayIntentBits.Guilds});

client.on("ready", () => {
	console.log("Bot is online");
	deployCommands();
});

client.on("interactionCreate", async (interaction) => {
	interactionCreate(interaction);
});

client.login(process.env.TOKEN);
