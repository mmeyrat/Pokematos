module.exports = {
    name: "add",
    description: "Ajoute un pokémon.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");
        
        if (args[0] == null || args[1] == null) return;

        if (!fs.existsSync(playerFile)) {
            if (!fs.existsSync("players/")) {
                fs.mkdirSync("players/", { recursive: true })
            }
            var playerPkmn = { team: [], pc: [] };
		    var json = JSON.stringify(playerPkmn, null, "\t");
	        fs.writeFileSync(playerFile, json);
        }

        var lp = 0;
        var name = args[0].toLowerCase();
        var https = require('https');
        let url = "https://www.pokepedia.fr/api.php?action=query&prop=revisions&titles=" + name + "&rvslots=*&rvprop=content&formatversion=2&format=json";

        https.get(url, function(res){
            var body = '';
            res.on('data', function(chunk){
                body += chunk;
            });
            res.on('end', function(){
                var response = JSON.parse(body);
                if (response.query.pages[0].revisions != null) {
                    var content = response.query.pages[0].revisions[0].slots.main.content.toString();
                    var lpStartId = content.search("PV=");
                    var lpEndId = content.search("attaque=");
                    var baseLp = Number(content.substring(lpStartId + 3, lpEndId - 2));
                    lp = Math.floor(((baseLp * 2 * Number(args[1])) / 100) + Number(args[1]) + 10);
                    loadedData();
                }
            });
        }).on('error', function(e){
              console.log("Got an error: ", e);
        });

        function loadedData() {
            var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));
    
            if (Number(args[1]) > 0 && Number(args[1]) < 101 && lp != 0) {
                if (playerPkmn.team.length < 6) {	
                    playerPkmn.team.push({ name: name, level: Number(args[1]), maxlp: lp, currentlp: lp });
                    var json = JSON.stringify(playerPkmn, null, "\t");
                    fs.writeFileSync(playerFile, json);
                    var embed = new Discord.MessageEmbed()
                        .setColor("#626BAE")
                        .setDescription("**" + name + "** a rejoint l'**équipe** de " + player.user.username + " !");
                    channel.send(embed);
                }
                else {
                    playerPkmn.pc.push({ name: name, level: Number(args[1]), maxlp: lp, currentlp: lp });
                    var json = JSON.stringify(playerPkmn, null, "\t");
                    fs.writeFileSync(playerFile, json);
                    var embed = new Discord.MessageEmbed()
                        .setColor("#626BAE")
                        .setDescription("**" + name + "** a été envoyé au **pc** de " + player.user.username + " !");
                    channel.send(embed);
                }
            }
        }
    }
}