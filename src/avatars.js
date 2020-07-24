var config = require("../static/config.json"),
    main = require("./main.js"),
    version = require("../package.json").version,
    avatars = require("./avatars.js");

var avatar = {
    "avatar": {
        desc: "kick a user",
        usage: "<@user> [message]",
        deleteCommand: true,
        cooldown: 3,
        process: function(client, msg, suffix) {
            client.on('message', message => {
                if (message.content === `$(PREFIX)avatar`) {
                    message.reply(message.author.displayAvatarURL());
                }
            });
        }

    }
}

exports = { avatar };
