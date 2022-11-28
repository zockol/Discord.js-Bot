const fs = require("fs");

module.exports = function (oldMember, newMember) {

	const Path = "\\..\\..\\jsons\\voiceActivity.json";
	var Read = fs.readFileSync(__dirname + Path);
	var File = JSON.parse(Read);

    var userTAG = newMember.member.user.tag
    var userID = newMember.id

    if (!File[userID]) {
        File[userID] = {Name: userTAG, Time: 0, LastJoinedTimeStamp: Math.floor(Date.now() / 1000)};
    }

    fs.writeFileSync(__dirname + Path, JSON.stringify(File, null, 2));
};
