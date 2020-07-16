// this file is just to ensure that the bot connects & works as intended
const Discord = require ('discord.js');
const client = new Discord.Client();

// libraries & plugins

var moderation = require ("./moderation.js"),
	avatars = require ("./avatars.js")
	//const cors = require ('cors');
	//const axious = require ('axios');

// token
const { prefix, token } = require('../static/config.json');

// files to import


// prefix for the bot
const PREFIX = '$';

// persion
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



client.login(token);

