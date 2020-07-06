module.exports = {
    name: "add",
    description: "Ajoute un pokémon",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");

        if (!fs.existsSync(playerFile)) {
            var playerPkmn = { team: [], pc: [] };
		    var json = JSON.stringify(playerPkmn);
	        fs.writeFileSync(playerFile, json);
        }

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));

        if (playerPkmn.team.length < 6) {	
            playerPkmn.team.push({ name: args[0], level: args[1] });
            var json = JSON.stringify(playerPkmn);
	        fs.writeFileSync(playerFile, json);
            var embed = new Discord.MessageEmbed()
                .setColor("#626BAE")
                .setDescription("**" + args[0] + "** a rejoint l'**équipe** de " + player.user.username + " !");
            channel.send(embed);
        }
        else {
            playerPkmn.pc.push({ name: args[0], level: args[1] });
            var json = JSON.stringify(playerPkmn);
	        fs.writeFileSync(playerFile, json);
            var embed = new Discord.MessageEmbed()
                .setColor("#626BAE")
                .setDescription("**" + args[0] + "** a été envoyé au **pc** de " + player.user.username + " !");
            channel.send(embed);
        }
    }
}