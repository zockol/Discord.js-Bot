const {EmbedBuilder} = require("discord.js");
const fs = require('fs')
const cron = require('node-cron')
const {guildId} = require("../config.json");

function msToTime(s) {
    var secs = s % 60;
    var mins = Math.floor(s / 60);
    var hrs = Math.floor(s / 3600)
  
    return hrs + ' Stunden ' + mins + ' Minuten ' + secs + ' Sekunden';
  }

function setFields (rankings, Fieldname, Array, counter, FileRanking) {
    let top = []
    let overallCount = 0;

    for (i = 0; i < 5; i++) {
        overallCount += counter[i];
		
        if (Array[i] == undefined) {
            top[i] = `${i+1}. not occupied`
            
        } else {
			var Time = msToTime(FileRanking[Array[i]].Time)
			top[i] = `${i+1}. <@${Array[i]}>: **${Time}**`

        }
        
    }

	var overall = msToTime(overallCount);

    
    let topfiveString =
    `Sum of the top members: ${overall}
    
    ${top[0]}
    ${top[1]}
    ${top[2]}
    ${top[3]}
    ${top[4]}`

    rankings.addFields([
		{name: Fieldname, value: topfiveString}
	])

}

function getUsers (client, Path, rankings) {

	const guild = client.guilds.cache.get(guildId)
	guild.members.fetch().then(r => {


		var Voice = [];

		var tmpVoice = [];
	
	

	
		var ReadRanking = fs.readFileSync(__dirname + Path);
		var FileRanking = JSON.parse(ReadRanking);

		for (i = 0; i < 5; i++) {
		tmpVoice[i] = 0;
		r.forEach(member => {
			
			if (FileRanking[member.user.id]) {
				if (FileRanking[member.user.id].Time > tmpVoice[i] && !Voice.includes(member.user.id)) {
					Voice[i] = member.user.id
					tmpVoice[i] = FileRanking[member.user.id].Time
				}
			}
		})
		
	}

    

    setFields(rankings, "Voice Activity | Top 5 Member", Voice, tmpVoice, FileRanking)

	const pathSettings = "\\..\\jsons\\settings.json";
	var readSettings = fs.readFileSync(__dirname + pathSettings);
	var fileSettings = JSON.parse(readSettings);
	client.channels.cache.get(fileSettings["activityBoard"].Channel).send({embeds: [rankings]});
	})

    
    

}

module.exports = function (client) { 
    cron.schedule('0 1 * * *', function() {
        const d = new Date();
        var lesbarDatum = ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear();
        const rankings = new EmbedBuilder()
			.setColor('#666666')
			.setTitle(`Activity Board ${lesbarDatum}`)
			.setDescription('This are the most active server member in voice channels')
			.setTimestamp()
			.setFooter({ text: 'Time of data:' });
        
        getUsers(client, '\\..\\jsons\\voiceActivity.json', rankings);
        


		
    })
}