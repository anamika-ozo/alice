const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjY5MDUwMzU3MjI1MDk1MTg5.XiaL4w.ADo-OGO-5ukKz67Is-JnzslNBBI';

// Prefix for the bot
const PREFIX = '$';

// Version
var version = ("0.0.2");

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
            message.channel.sendMessage('https://github.com/Mioroxi/discord-bot');
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.sendMessage('Version ' + version);
            } else {
                message.channel.sendMessage('enter a second argument');
                break;
            }
	case 'creator':
	    message.channel.sendMessage("The glorious hardee-sama, hence my questionable programming.");
            break;
	case 'clear':
            if (!args[1]) return message.reply('Please enter a second argument');
            message.channel.bulkDelete(args[1]);
            break;
        case 'fuck you':
            message.channel.sendMessage('pls no bully. Q_Q');
            break;
	}
})



client.login(token);
