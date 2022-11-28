const fs = require("fs");

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function create(jsonName) {


		fs.writeFile(`./jsons/${jsonName}.json`, "{ }", function (err) {
			console.log("File is created successfully.");
		});

		delay(1000).then(() => {
			var Path = `./jsons/${jsonName}.json`;
			var Read = fs.readFileSync(Path);
			var File = JSON.parse(Read);

			fs.writeFileSync(Path, JSON.stringify(File, null, 2)); //if not, create it
		});
};

module.exports = function () {
	if (!fs.existsSync(`./jsons/settings.json`)) {
		fs.mkdirSync("./jsons");
	}
	create("settings")
	create("voicebans")

	}

