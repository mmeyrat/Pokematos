module.exports = {
	name: "hit",
	args: ["montant"],
	description: "Fais perdre des PVs à un Pokémon.",
	execute(channel, player, playerFile, args) {
		const Discord = require("discord.js");
		const fs = require("fs");

		if (!fs.existsSync(playerFile) || args[0] == null) return;

		var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));
		var lp = playerPkmn.team[0].currentlp - Number(args[0]);
		
		if (lp < 0) {
			lp = 0;
		}

		playerPkmn.team[0].currentlp = lp;
		var json = JSON.stringify(playerPkmn, null, "\t");
		fs.writeFileSync(playerFile, json);
		var embed = new Discord.MessageEmbed()
			.setColor("#626BAE")
			.setDescription("**" + playerPkmn.team[0].name + "** a perdu **" + args[0] + "** PV ! il lui reste **" + lp + "** PV.");
		channel.send(embed);
	}
}
