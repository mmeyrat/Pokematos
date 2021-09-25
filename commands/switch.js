module.exports = {
    name: "switch",
    description: "Echange deux pokémon de l'équipe.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");

        if (!fs.existsSync(playerFile) || args[0] == null || args[1] == null) return;

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));

        var tmp = playerPkmn.team[args[0] - 1];
        playerPkmn.team[args[0] - 1] = playerPkmn.team[args[1] - 1];
        playerPkmn.team[args[1] - 1] = tmp;

        var json = JSON.stringify(playerPkmn, null, "\t");
	    fs.writeFileSync(playerFile, json);

        var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setDescription("**" + playerPkmn.team[args[1] - 1].name + "** et **" + playerPkmn.team[args[0] - 1].name + "** ont changé de place.");
        channel.send(embed);
    }
}