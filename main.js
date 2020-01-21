const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjYzNDI1MzcyMzgxMTE4NDk0.XiZ4QA.nkv_litaLX6IJeAJGrVyTZ6YwM4';

// Prefix for the bot
const PREFIX = '$';

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
                    message.reply('yes im here');
                    break;
                case 'help':
                    message.reply('I only ping rn :(');
                    break;
                case 'source':
                    message.reply('https://github.com/Mioxoi/discord-bot');
                    break;
                case 'info':
                    if (args[1] === 'version') {
                        message.channel.sendMessage('Version ' + 'version');
                    } else {
                        message.channel.sendMessage('enter a second argument');
                    }
                    break;
                case 'clear':
                    if (!args[1]) return message.reply('Please enter a second argument');
                    message.channel.bulkDelete(args[1]);
                    break;

                    client.login(token);