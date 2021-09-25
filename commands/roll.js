module.exports = {
    name: "roll",
    description: "Lance un dé.",
    execute(channel, player, file, args) {        
        const Discord = require("discord.js");
        var random = Math.floor(Math.random() * 6) + 1;
        var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setDescription("Le résultat est **" + random + "** !");
        channel.send(embed);
    }
}
