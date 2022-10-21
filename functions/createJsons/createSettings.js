function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = function () {
	const fs = require("fs");
	console.log("in function");
	if (!fs.existsSync("./jsons/settings.json")) {
		fs.mkdirSync("./jsons");

		fs.writeFile("./jsons/settings.json", "{ }", function (err) {
			console.log("File is created successfully.");
		});

		delay(1000).then(() => {
			var Path = "./jsons/settings.json";
			var Read = fs.readFileSync(Path);
			var File = JSON.parse(Read);

			File[0] = {welcomeMessage: false, Channel: 0};

			fs.writeFileSync(Path, JSON.stringify(File, null, 2)); //if not, create it
		});
	}
};
