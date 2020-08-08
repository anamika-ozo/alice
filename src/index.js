// @flow

var Discord = require('discord.js'),
    client = new Discord.Client({
        maxCachedMessages: 10,
        forceFetchUsers: true
    });

// files to import
var moderation = require("./moderation.js"),
    avatar = require("./avatars.js");

// libraries & plugins
var Iconv = require('iconv').Iconv,
    request = require('request'),
    chalk = require('chalk'),
    coffee = require('coffeescript'),
    now = Date.now();

/* constants to never change */
const PREFIX = '$', // prefix for the client
    TOKEN = require("../static/env.ex".DISCORD_TOKEN ||
     "../static/config.json".static.token 
    ), // login token
    
    VERSION = ("../package.json").version; // version

// ready the client
client.on('ready', () => {
    console.log(`
        ┌───────────────────────────┐
        │                           │
        │                           │
        │    the bot is online!!    │
        │                           │
        │                           │
        └───────────────────────────┘
    `);
});

//== main functionality for the client ==\\

// message embed function
function embedMessage(title, colour, description) {
    client.on('message', message => {
        const embed = new MessageEmbed()
            .setTitle(title)
            .setColor(colour)
            .setDescription(description);
        message.channel.send(embed);
    });

    client.on('message', message => {
        if (message.content === `${PREFIX}embed`) {
            embedMessage();
        }
    });

}

client.on('message', message => {
    if (message.content === 'H-HEWWO') {
        message.channel.send('HIII FWEMB!!!');
    }
});

function execCommand(msg, cmd, suffix, type) {
    'use strict';
    try {
        commandsProcessed += 1;
        if (type == "normal") {
            if (!msg.channel.isPrivate) console.log(cServer(msg.channel.server.name) + " > " + cGreen(msg.author.username) + " > " + msg.cleanContent.replace(/\n/g, " "));
            else console.log(cGreen(msg.author.username) + " > " + msg.cleanContent.replace(/\n/g, " "));
            if (msg.author.id != config.admin_id && commands.commands[cmd].hasOwnProperty("cooldown")) {
                if (!lastExecTime.hasOwnProperty(cmd)) lastExecTime[cmd] = {};
                if (!lastExecTime[cmd].hasOwnProperty(msg.author.id)) lastExecTime[cmd][msg.author.id] = new Date().valueOf();
                else {
                    if (now < lastExecTime[cmd][msg.author.id] + (commands.commands[cmd].cooldown * 1000)) {
                        client.sendMessage(msg, msg.author.username.replace(/@/g, '@\u200b') + ", you need to *cooldown* (" + Math.round(((lastExecTime[cmd][msg.author.id] + commands.commands[cmd].cooldown * 1000) - now) / 1000) + " seconds)", (e, m) => {
                            client.deleteMessage(m, {
                                "wait": 6000
                            });
                        });
                        if (!msg.channel.isPrivate) client.deleteMessage(msg, {
                            "wait": 10000
                        });
                        return;
                    }
                    lastExecTime[cmd][msg.author.id] = now;
                }
            }
            commands.commands[cmd].process(client, msg, suffix);
            if (!msg.channel.isPrivate && commands.commands[cmd].hasOwnProperty("deleteCommand")) {
                if (commands.commands[cmd].deleteCommand === true && ServerSettings.hasOwnProperty(msg.channel.server.id) && ServerSettings[msg.channel.server.id].deleteCommands == true) client.deleteMessage(msg, {
                    "wait": 10000
                });
            }
        } else if (type == "mod") {
            if (!msg.channel.isPrivate)
                console.log(cServer(msg.channel.server.name) + " > " + cGreen(msg.author.username) + " > " + cBlue(msg.cleanContent.replace(/\n/g, " ").split(" ")[0]) + msg.cleanContent.replace(/\n/g, " ").substr(msg.cleanContent.replace(/\n/g, " ").split(" ")[0].length));
            else console.log(cGreen(msg.author.username) + " > " + cBlue(msg.cleanContent.replace(/\n/g, " ").split(" ")[0]) + msg.cleanContent.replace(/\n/g, " ").substr(msg.cleanContent.replace(/\n/g, " ").split(" ")[0].length));
            if (msg.author.id != config.admin_id && mod.commands[cmd].hasOwnProperty("cooldown")) {
                if (!lastExecTime.hasOwnProperty(cmd)) lastExecTime[cmd] = {};
                if (!lastExecTime[cmd].hasOwnProperty(msg.author.id)) lastExecTime[cmd][msg.author.id] = new Date().valueOf();
                else {
                    if (now < lastExecTime[cmd][msg.author.id] + (mod.commands[cmd].cooldown * 1000)) {
                        client.sendMessage(msg, msg.author.username.replace(/@/g, '@\u200b') + ", you need to *cooldown* (" + Math.round(((lastExecTime[cmd][msg.author.id] + mod.commands[cmd].cooldown * 1000) - now) / 1000) + " seconds)", (e, m) => {
                            client.deleteMessage(m, {
                                "wait": 6000
                            });
                        });
                        if (!msg.channel.isPrivate) client.deleteMessage(msg, {
                            "wait": 10000
                        });
                        return;
                    }
                    lastExecTime[cmd][msg.author.id] = now;
                }
            }
            mod.commands[cmd].process(client, msg, suffix);
            if (!msg.channel.isPrivate && mod.commands[cmd].hasOwnProperty("deleteCommand")) {
                if (mod.commands[cmd].deleteCommand === true && ServerSettings.hasOwnProperty(msg.channel.server.id) && ServerSettings[msg.channel.server.id].deleteCommands == true) client.deleteMessage(msg, {
                    "wait": 10000
                });
            }
        } else return;
    } catch (err) {
        console.err(err.stack);
        consoconsole.log(main);
        le.log(substr);
    }
}


client.login(TOKEN);