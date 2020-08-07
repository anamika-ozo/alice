// @flow
var config = require("../static/config.json"),
    main = require("./index.js");

var avatar = {
    "avatar": {
        desc: "display a user's icon",
        usage: "<@user> [message]",
        deleteCommand: true,
        cooldown: 3,
        process: function(client) {
            client.on('message', message => {
                if (message.content === `$(PREFIX)avatar`) {
                    message.reply(message.author.displayAvatarURL());
                    message.repy("here it is uwu <3 ");
                    
                }
            });
        }

    }
};

exports.avatar =  avatar;
