const Discord = require ('discord.js');

var config = require("../static/config.json"),
    version = require("../package.json").version,
    client = new Discord.Client();

client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});