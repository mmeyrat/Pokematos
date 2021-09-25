const Discord = require("discord.js");
const config = require("./config");
const fs = require("fs");
 
const client = new Discord.Client();
client.commands = new Discord.Collection();

var commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (var file of commandFiles) {
	var command = require("./commands/" + file);
	client.commands.set(command.name, command);
}

client.once("ready", () => {
	console.log("Ready!");
});

client.on("message", message => {
	var channel = client.channels.cache.get(message.channel.id);
	var player = message.member;
	var playerFile = "players/" + player.id + ".json";
	var args = message.content.slice(config.PREFIX.length).split(" ");
	var command = args.shift().toLowerCase();

	if (fs.existsSync(playerFile)) {
		if (client.commands.has(command)) {
			client.commands.get(command).execute(channel, player, playerFile, args);
		}
	} else if (message.author.id != client.user.id) {
		var embed = new Discord.MessageEmbed()
            .setColor("#626BAE")
            .setDescription("Utilisez la commande **&start** pour commencer.");
        channel.send(embed);
		return;
	}
});
 
client.login(config.TOKEN);
