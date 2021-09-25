module.exports = {
    name: "lv",
	args: ["montant"],
    description: "Augmente le niveau d'un Pokémon (max. 100).",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");

        if (!fs.existsSync(playerFile) || args[0] == null) return;

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));

        if (Number(playerPkmn.team[0].level) + Number(args[0]) < 100) {
            playerPkmn.team[0].level = Number(playerPkmn.team[0].level) + Number(args[0]);
            var json = JSON.stringify(playerPkmn, null, "\t");
            fs.writeFileSync(playerFile, json);

            var embed = new Discord.MessageEmbed()
                .setColor("#626BAE")
                .setDescription("**" + playerPkmn.team[0].name + "** est maintenant niveau **" + playerPkmn.team[0].level + "** !");
            channel.send(embed);
        }
    }
}