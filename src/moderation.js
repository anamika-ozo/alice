// @flow
var config = require("./static/config.json"),
    version = require("../package.json").version,
    main = require("./index.js");

// kick function
var mod = {
    "kick": {
        desc: "kick a user",
        usage: "<@user> [message]",
        deleteCommand: true,
        cooldown: 3,
        process: function(client, msg, suffix) {
            client.on('message', message => {
                if (message.content.startsWith('!kick')) {
                    const user = message.mentions.users.first();
                    if (user) {
                        const member = message.guild.member(user);
                        if (member) {
                            member
                                .kick('Optional reason that will display in the audit logs')
                                .then(() => {
                                    message.reply(`Successfully kicked ${user.tag}`);
                                })
                                .catch(err => {
                                    message.reply('I was unable to kick the member');
                                    console.error(err);
                                });
                        } else {
                            message.reply("That user isn't in this guild!");
                        }
                    } else {
                        message.reply("You didn't mention the user to kick!");
                    }
                }
            });
        }
    },



    // ban stuff
    "ban": {
        desc: "Ban a user",
        usage: "<@user> [message]",
        deleteCommand: true,
        cooldown: 3,
        process: function(client, msg, suffix) {
            client.on('message', message => {
                if (message.content.startsWith(`${PREFIX}ban`)) {
                    const user = message.mentions.users.first();
                    if (user) {
                        let member = message.guild.member(user);
                        if (member) {
                            member.ban({
                                    reason: 'they were mean! Q_Q\n i HATE THEM',
                                })
                                .then(() => {
                                    message.reply(`raped ${user.tag}`);
                                })
                                .catch(err => {
                                    message.reply('I was unable to ban the member');
                                    console.error(err);
                                });
                        } 
                          else {
                            message.reply("That user isn't in this guild!");
                        }
                    } 
                      else {
                        message.reply("You didn't mention the user to ban!");
                    }
                }
            });
        }
    }
};

exports.mod = mod;
