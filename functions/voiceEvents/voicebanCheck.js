const fs = require("fs");

module.exports = function (oldMember, newMember) {

	const Path = "\\..\\..\\jsons\\voicebans.json";
	var Read = fs.readFileSync(__dirname + Path);
	var File = JSON.parse(Read);

    var userID = newMember.id
    if (newMember.channelId) {
        if(File[userID]) {
            if(File[userID].Banned == 1) {
                newMember.member.voice.disconnect();
            }
        }
    }
};
