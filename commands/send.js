module.exports = {
    name: "send",
    description: "Envoie un pokémon de l'équipe au pc.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");
        
        if (!fs.existsSync(playerFile) || args[0] == null) return;

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));
        var index = -1;
        
        for (var i = 0; i < playerPkmn.team.length; i++) {
            if (playerPkmn.team[i].name == args[0]) {
                index = i;
            }
        }
        
        if (index !== -1) {
            playerPkmn.pc.push(playerPkmn.team[index]);
            playerPkmn.team.splice(index, 1);
            var json = JSON.stringify(playerPkmn, null, "\t");
            fs.writeFileSync(playerFile, json);
            var embed = new Discord.MessageEmbed()
                .setColor("#626BAE")
                .setDescription("**" + args[0] + "** a été envoyé au **pc** de " + player.user.username + " !");
            channel.send(embed);
        }
    }
}