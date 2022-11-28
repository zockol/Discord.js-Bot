const fs = require("fs");

module.exports = async function (interaction) {
	const Path = "\\..\\..\\..\\jsons\\voicebans.json";
	var Read = fs.readFileSync(__dirname + Path);
	var File = JSON.parse(Read);

    var userID = interaction.options.getUser("user").id
    var userTAG = interaction.options.getUser("user").tag

    if (!File[userID]) {
        File[userID] = {Username: userTAG, Banned: 1};
        interaction.reply(`<@${userID}> got his permissions to join voice removed!`)
    } else {
        if (File[userID].Banned == 1) {
            File[userID].Banned = 0
            interaction.reply(`<@${userID}> got his permissions to join voice back!`)
        } else {
            File[userID].Banned = 1
            interaction.reply(`<@${userID}> got his permissions to join voice removed!`)
        }
    }
    fs.writeFileSync(__dirname + Path, JSON.stringify(File, null, 2));
};
