module.exports = {
    name: "help",
    description: "Affiche l'aide.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require('fs');

        var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setTitle("Liste des commandes");

        fs.readdirSync("./commands").forEach(file => {
            var command = require("./" + file);
            var nameAndArgs = "`&" + command.name;
            embed.addField(command.name, nameAndArgs + "` : " + command.description);
        });

        channel.send(embed);
    }
}
