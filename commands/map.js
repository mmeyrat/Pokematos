module.exports = {
    name: "map",
	args: [""],
    description: "Affiche la carte de Sinnoh.",
    execute(channel, player, file, args) {
        const Discord = require("discord.js");
        var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setTitle("Sinnoh")
            .setURL("https://www.pokepedia.fr/Sinnoh")
            .setImage("https://www.pidgi.net/wiki/images/thumb/a/a6/Sinnoh_%28alt%29_-_Pokemon_Platinum.jpg/800px-Sinnoh_%28alt%29_-_Pokemon_Platinum.jpg");
        channel.send(embed);
    }
}
