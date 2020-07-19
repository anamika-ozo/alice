client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});