module.exports = {
    name: "pc",
    description: "Affiche le pc.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");

        if (!fs.existsSync(playerFile)) return;

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));

        if (playerPkmn.pc[0] == null) {
            var embed = new Discord.MessageEmbed()
                .setColor("#626BAE")
                .setAuthor(player.user.username + " - PC", player.user.displayAvatarURL())
                .setThumbnail("https://www.pokepedia.fr/images/2/26/PC-RB.png")
                .setDescription("Votre PC est vide.");
            channel.send(embed);
        }
        else {
            var nField = [];
            var pkmnField = [];
    
            for (var i = 0; i < playerPkmn.pc.length; i++) {
                nField[i] = i + 1;
                pkmnField[i] = playerPkmn.pc[i].name + ", Nv. " + playerPkmn.pc[i].level;
            }
    
            var embed = new Discord.MessageEmbed()
                .setColor("#626BAE")
                .setAuthor(player.user.username + " - PC", player.user.displayAvatarURL())
                .setThumbnail("https://www.pokepedia.fr/images/2/26/PC-RB.png")
                .addField("N°", nField.join('\n'), true)
                .addField("Pokémon", pkmnField.join('\n'), true);
            channel.send(embed);
        }
    }
}