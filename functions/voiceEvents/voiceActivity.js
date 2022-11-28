const fs = require("fs");

module.exports = function (oldMember, newMember) {

	const Path = "\\..\\..\\jsons\\voiceActivity.json";
	var Read = fs.readFileSync(__dirname + Path);
	var File = JSON.parse(Read);

    var userTAG = newMember.member.user.tag
    var userID = newMember.id
    var DateInSeconds = Math.floor(Date.now() / 1000)

    if (!File[userID]) {
        File[userID] = {Name: userTAG, Time: 0, LastJoinedTimeStamp: DateInSeconds};
    } else {
        if ((newMember.channelId != oldMember.channelId) || (!oldMember.selfDeaf && newMember.selfDeaf) || (!oldMember.selfMute && newMember.selfMute)) {
            if (oldMember.channelId != null) {
                if (File[userID].LastJoinedTimeStamp != 0 ) {
                    File[userID].Time += (DateInSeconds - File[userID].LastJoinedTimeStamp)
                }
            }
            
        }
        
        if (newMember.channelId != null && newMember.channelId != oldMember.channelId) {
            File[userID].LastJoinedTimeStamp = DateInSeconds
        } else if (oldMember.selfDeaf && !newMember.selfDeaf) {
            File[userID].LastJoinedTimeStamp = DateInSeconds
        } else if ((oldMember.selfMute && !newMember.selfMute)) {
            File[userID].LastJoinedTimeStamp = DateInSeconds
        } else {
            File[userID].LastJoinedTimeStamp = 0
        }
            
        
    }



    fs.writeFileSync(__dirname + Path, JSON.stringify(File, null, 2));
};
