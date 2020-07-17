var Discord = require ('discord.js'), 
	client = new Discord.Client();

client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});