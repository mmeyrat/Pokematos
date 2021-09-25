const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config");
 
const client = new Discord.Client();
client.commands = new Discord.Collection();

var commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
var activities = ["Chronique Pokémon Chen", "Musique Pokémon", "Antenne Chance", "Code de Buena", "Socio FM"];

for (var file of commandFiles) {
	var command = require("./commands/" + file);
	client.commands.set(command.name, command);
}

client.on("ready", () => {
	console.log("Ready!");
	setInterval(() => {
		var id = Math.floor(Math.random() * (activities.length - 1) + 1);
		client.user.setActivity(activities[id], { type: "LISTENING" });
	}, 120000);
});

client.on("message", message => {
	var channel = client.channels.cache.get(message.channel.id);
	var player = message.member;
	var playerFile = "players/" + player.id + ".json";
	var args = message.content.slice(config.PREFIX.length).split(" ");
	var command = args.shift().toLowerCase();

	if (client.commands.has(command)) {
		client.commands.get(command).execute(channel, player, playerFile, args);
	}
});
 
client.login(config.TOKEN);
