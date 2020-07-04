const Discord = require('discord.js');

const client = new Discord.Client();

client.once("ready", () => {
	console.log("Ready!");
});

client.on('message', message => {
	if (message.content === '!Hello') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('hello to you too.');
	}
});

client.login("NzI4OTgzMTY1MDk1NjQxMTYw.XwCVjw.wAZUx97CxZA62gb16M-zehxZNGA");
