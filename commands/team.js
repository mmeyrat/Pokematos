module.exports = {
    name: "team",
    description: "Affiche l'équipe.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");

        if (!fs.existsSync(playerFile)) return;

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));
        var pkmnField = [];
        var lpField = [];

        for (var i = 0; i < playerPkmn.team.length; i++) {
            pkmnField[i] = (i + 1) + " - " + playerPkmn.team[i].name + ", Nv. " + playerPkmn.team[i].level;
            lpField[i] = playerPkmn.team[i].currentlp + "/" + playerPkmn.team[i].maxlp;
        }

        var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setAuthor(player.user.username + " - Équipe", player.user.displayAvatarURL())
            .addField("Pokémon", pkmnField.join('\n'), true)
            .addField("PV", lpField.join('\n'), true);
        channel.send(embed);
    }
}
