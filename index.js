const {Client, Collection, GatewayIntentBits} = require("discord.js");
const env = require("dotenv").config();

const client = new Client({intents: GatewayIntentBits.Guilds});

client.on("ready", () => {
	console.log("Bot is online");
});

client.login(process.env.TOKEN);
