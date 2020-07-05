const Discord = require('discord.js');

const client = new Discord.Client();

client.once("ready", () => {
	console.log("Ready!");
});

client.on("message", message => {
	var chan = client.channels.cache.get(message.channel.id);
	var msg = message.toString();
	
	if (msg.charAt(1) == '&') {
		chan.send("oui");
	}
});

client.login("NzI4OTgzMTY1MDk1NjQxMTYw.XwCVjw.wAZUx97CxZA62gb16M-zehxZNGA");
