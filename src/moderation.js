var Discord = require ('discord.js'),
      client = new Discord.Client();

// kick function
client.on('message', message => {
  if (message.content.startsWith(`${PREFIX}kick`)) {
    let user = message.mentions.users.first();
    if (user) {
      let member = message.guild.member(user);
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
        message.reply("person doesnt exist doesnt exist: user error");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

// ban stuff
client.on('message', message => {
  if (message.content.startsWith(`${PREFIX}ban`)) {
    const user = message.mentions.users.first();
    if (user) {
      let member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'they were mean! Q_Q\n i HATE THEM',
          })
          .then(() => {
            message.reply(`raped ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});
