module.exports = {
    name: "retrieve",
	args: ["nom"],
    description: "Envoie un Pokémon du PC à l'équipe.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");
        
        if (!fs.existsSync(playerFile) || args[0] == null) return;

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));
        var index = -1;
        
        for (var i = 0; i < playerPkmn.pc.length; i++) {
            if (playerPkmn.pc[i].name == args[0]) {
                index = i;
            }
        }
        
        if (index !== -1 && playerPkmn.team.length < 6) {
            playerPkmn.team.push(playerPkmn.pc[index]);
            playerPkmn.pc.splice(index, 1);
            var json = JSON.stringify(playerPkmn, null, "\t");
            fs.writeFileSync(playerFile, json);
            var embed = new Discord.MessageEmbed()
                .setColor("#626BAE")
                .setDescription("**" + args[0] + "** a été ajouté à l'**équipe** de " + player.user.username + " !");
            channel.send(embed);
        }
    }
}