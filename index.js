const Eris = require('eris'),
    fs = require('fs'),
    TOKEN = require ('./config.json'),
    client = new Eris(TOKEN.token),
    PREFIX = '$'

import commands from ('src/commands')
import del_messgaes from ('src/del_messages')

client.on('messageCreate', message = () => {
    if (message.content == `${PREFIX}ping`) {
        message.channel.createMessage('hii8iiiii <3');
    }
})


client.connect(); console.log('hi')

