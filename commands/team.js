module.exports = {
    name: "team",
    description: "Affiche l'équipe",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");

        if (!fs.existsSync(playerFile)) return;

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));
        var nField = [];
        var pkmnField = [];

        for (var i = 0; i < playerPkmn.team.length; i++) {
            nField[i] = i + 1;
            pkmnField[i] = playerPkmn.team[i].name + ", Nv. " + playerPkmn.team[i].level;
        }

        var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setAuthor(player.user.username + " - Équipe", player.user.displayAvatarURL())
            .addField("N°", nField.join('\n'), true)
            .addField("Pokémon", pkmnField.join('\n'), true);
        channel.send(embed);
    }
}
