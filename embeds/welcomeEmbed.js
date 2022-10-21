const {EmbedBuilder} = require("discord.js");
const axios = require("axios");

module.exports = async function (member, channel) {
	axios.get(`https://api.giphy.com/v1/gifs/random?api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes&tag=welcome&rating=pg-13`).then((res) => {
		var welcomeEmbed = new EmbedBuilder()
			.setColor("#89CFF0")
			.setTitle(`Welcome to ${member.guild.name}`)
			.setAuthor({name: member.user.tag, iconURL: member.user.displayAvatarURL(), url: member.user.displayAvatarURL()})
			.setImage(res.data.data.images.original.url);

		channel.send({embeds: [welcomeEmbed]});
	});
};
