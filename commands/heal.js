module.exports = {
    name: "heal",
    description: "Soigne un pokémon.",
    execute(channel, player, playerFile, args) {
        const Discord = require("discord.js");
        const fs = require("fs");

        if (!fs.existsSync(playerFile) || args[0] == null) return;

        var playerPkmn = JSON.parse(fs.readFileSync(playerFile, 'utf8'));
        
        if (args[0] == "full") {
            var lp = playerPkmn.team[0].maxlp;
        } 
        else {
            var lp = playerPkmn.team[0].currentlp + Number(args[0]);
        }
        
        if (lp > playerPkmn.team[0].maxlp) {
            lp = playerPkmn.team[0].maxlp;
        }

        playerPkmn.team[0].currentlp = lp;
        var json = JSON.stringify(playerPkmn, null, "\t");
        fs.writeFileSync(playerFile, json);
        var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setDescription("**" + playerPkmn.team[0].name + "** a été soigné ! il a maintenant **" + lp + "** PV.");
        channel.send(embed);
    }
}
