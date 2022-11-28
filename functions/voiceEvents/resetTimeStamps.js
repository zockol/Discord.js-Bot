const fs = require("fs");

module.exports = function () {

	const Path = "\\..\\..\\jsons\\voiceActivity.json";
	var Read = fs.readFileSync(__dirname + Path);
	var File = JSON.parse(Read);

    for( let key in File ) {
        File[key].LastJoinedTimeStamp = 0
      }


      fs.writeFileSync(__dirname + Path, JSON.stringify(File, null, 2));
};
