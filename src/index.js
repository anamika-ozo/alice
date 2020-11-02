'use strict';

/* constants to never change */
const Eris = require('eris'),
    token = require("../static/env.ex"), // login token    
    client = new Eris(token),
    PREFIX = '$', // prefix for the client
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

if (!token) {
    throw new error ("there's no freaking token dummy..");
    console.err(error);
}

client.connect()



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
