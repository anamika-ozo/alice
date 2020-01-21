const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjY5MDkyMTI1Mjg3MTIwODk3.XiayzA.h5NKnN_BLZNVtLlGVVgisChAkYo';

// Prefix for the bot
const PREFIX = '$';

// Version
var version = ("0.0.1");

// Main
client.on('ready', () => {
    console.log('The robot is online!');
})

client.on('message', message => {
    if (message.content === "H-HEWWO") {
        message.reply('H-HEWWO FWENB!!!');
    }
})

client.on('message', message => {
            let args = message.content.substring(PREFIX.length).split(" ");
            switch (args[0]) {
                case 'ping':
                    message.channel.sendMessage('yes im here');
                    break;
                case 'help':
                    message.channel.sendMessage('I only ping rn ');
                    break;
                case 'source':
		    message.channel.sendMessage('https://github.com/Mioxoi/discord-bot');
                    break;
                case 'info':
                    if(args[1] === 'version') {
                        message.channel.sendMessage('Version ' + version);
                    } else {
                        message.channel.sendMessage('enter a second argument');
                    }
                break;
                case 'clear':
                    if (!args[1]) return message.reply('Please enter a second argument');
                    message.channel.bulkDelete(args[1]);
                    break;
		case 'hey bot, fuck you.':
			message.channel.sendMessage('pls no bully. Q_Q');
			break;
	    }
})
	client.on('message', message => {
            let args = message.content.substring(PREFIX.length).split(" ");
            switch (args[0]) {
		    case 'embed':
			    const embed = new Discord.RichEmbed()
			    .setTitle('User Information')
			    .addField('Player Name', message.author.username)
			    .addField('Current Server', message.guild.name)
			    .setColor('#9CF1F0')
			    .setThumbnail(message.author.avatarURL)
			    message.channel.sendEmbed(embed);
			    break;

    }
})

client.login(token);
