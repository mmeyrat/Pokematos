module.exports = {
    name: "help",
	args: [""],
    description: "Affiche l'aide.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require('fs');
        const config = require("../config.js");

        var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setTitle("Liste des commandes");

        fs.readdirSync("./commands").forEach(file => {
            var command = require("./" + file);
            var nameAndArgs = "`" + config.PREFIX + command.name;
            for (var i = 0; i < command.args.length; i++) {
                if (command.args[i] != "") {
                    nameAndArgs += " <" + command.args[i] + ">";
                }
            }
            embed.addField(command.name.charAt(0).toUpperCase() + command.name.slice(1), nameAndArgs + "` : " + command.description);
        });

        channel.send(embed);
    }
}
