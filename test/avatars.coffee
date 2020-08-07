config = require("../static/config.json")
main = require("../src/index.js")
version = require("../package.json").version
message = "msg"

avatars = (msg, match) ->
    users = msg.mentions.users.array()

    if not users.length then users = [msg.author]

    for user in users
        embed = new Discord.RichEmbed()
            .setColor '#448aff'
            .setURL   user.displayAvatarURL
            .setTitle user.username
            .setDescription "Profile image"
            .setImage user.displayAvatarURL
        msg.channel.send embed
    

exports.avatars =  avatars;