// this file is just to ensure that the bot connects & works as intended
var Discord = require ('discord.js'), 
	client = new Discord.Client();

var token = require("../static/config.json"), // login token
	commands = require("./commands.js"),
	moderation = require("./moderation.js"),
	avatar = require("./avatars.js"),

	// libraries & plugins
	request = require('request'),
	chalk = require('chalk');	
// prefix for the bot
const PREFIX = '$';

// version
let version = ("../package.json").version;

// Main
client.on('ready', () => {
    console.log('The robot is online!');
})

client.on('message', message => {
    if (message.content === "H-HEWWO") {
        message.reply('H-HEWWO FWENB!!!');
    }
})

'use strict';

// message embed function
function embedMessage(title, colour, descroption) {
	client.on('message', message => {
  		const embed = new MessageEmbed()
      	.setTitle(title)
      	.setColor(colour)
      	.setDescription(description);
    	message.channel.send(embed);
    });

}

function execCommand(msg, cmd, suffix, type) {
	try {
		commandsProcessed += 1;
		if (type == "normal") {
			if (!msg.channel.isPrivate) console.log(cServer(msg.channel.server.name) + " > " + cGreen(msg.author.username) + " > " + msg.cleanContent.replace(/\n/g, " "));
			else console.log(cGreen(msg.author.username) + " > " + msg.cleanContent.replace(/\n/g, " "));
			if (msg.author.id != config.admin_id && commands.commands[cmd].hasOwnProperty("cooldown")) {
				if (!lastExecTime.hasOwnProperty(cmd)) lastExecTime[cmd] = {};
				if (!lastExecTime[cmd].hasOwnProperty(msg.author.id)) lastExecTime[cmd][msg.author.id] = new Date().valueOf();
				else {
					var now = Date.now();
					if (now < lastExecTime[cmd][msg.author.id] + (commands.commands[cmd].cooldown * 1000)) {
						bot.sendMessage(msg, msg.author.username.replace(/@/g, '@\u200b') + ", you need to *cooldown* (" + Math.round(((lastExecTime[cmd][msg.author.id] + commands.commands[cmd].cooldown * 1000) - now) / 1000) + " seconds)", (e, m)=>{ bot.deleteMessage(m, {"wait": 6000}); });
						if (!msg.channel.isPrivate) bot.deleteMessage(msg, {"wait": 10000});
						return;
					} lastExecTime[cmd][msg.author.id] = now;
				}
			}
			commands.commands[cmd].process(bot, msg, suffix);
			if (!msg.channel.isPrivate && commands.commands[cmd].hasOwnProperty("deleteCommand")) {
				if (commands.commands[cmd].deleteCommand === true && ServerSettings.hasOwnProperty(msg.channel.server.id) && ServerSettings[msg.channel.server.id].deleteCommands == true) bot.deleteMessage(msg, {"wait": 10000});
			}
		} else if (type == "mod") {
			if (!msg.channel.isPrivate)
				console.log(cServer(msg.channel.server.name) + " > " + cGreen(msg.author.username) + " > " + cBlue(msg.cleanContent.replace(/\n/g, " ").split(" ")[0]) + msg.cleanContent.replace(/\n/g, " ").substr(msg.cleanContent.replace(/\n/g, " ").split(" ")[0].length));
			else console.log(cGreen(msg.author.username) + " > " + cBlue(msg.cleanContent.replace(/\n/g, " ").split(" ")[0]) + msg.cleanContent.replace(/\n/g, " ").substr(msg.cleanContent.replace(/\n/g, " ").split(" ")[0].length));
			if (msg.author.id != config.admin_id && mod.commands[cmd].hasOwnProperty("cooldown")) {
				if (!lastExecTime.hasOwnProperty(cmd)) lastExecTime[cmd] = {};
				if (!lastExecTime[cmd].hasOwnProperty(msg.author.id)) lastExecTime[cmd][msg.author.id] = new Date().valueOf();
				else {
					var now = Date.now();
					if (now < lastExecTime[cmd][msg.author.id] + (mod.commands[cmd].cooldown * 1000)) {
						bot.sendMessage(msg, msg.author.username.replace(/@/g, '@\u200b') + ", you need to *cooldown* (" + Math.round(((lastExecTime[cmd][msg.author.id] + mod.commands[cmd].cooldown * 1000) - now) / 1000) + " seconds)", (e, m)=>{ bot.deleteMessage(m, {"wait": 6000}); });
						if (!msg.channel.isPrivate) bot.deleteMessage(msg, {"wait": 10000});
						return;
					} lastExecTime[cmd][msg.author.id] = now;
				}
			}
			mod.commands[cmd].process(bot, msg, suffix);
			if (!msg.channel.isPrivate && mod.commands[cmd].hasOwnProperty("deleteCommand")) {
				if (mod.commands[cmd].deleteCommand === true && ServerSettings.hasOwnProperty(msg.channel.server.id) && ServerSettings[msg.channel.server.id].deleteCommands == true) bot.deleteMessage(msg, {"wait": 10000});
			}
		} else return;
	} catch (err) { console.log(err.stack); }
}


client.login(token);
