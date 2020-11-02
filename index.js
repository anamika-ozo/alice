const Eris = require('eris'),
    fs = require('fs'),
    TOKEN = require ('./auth.json'),
    client = new Eris(TOKEN.token),
    PREFIX = '$'

client.on('messageCreate', message = () => {
    if (message.content == `${PREFIX}ping`) {
        message.channel.createMessage('hii8iiiii <3');
    }
})


client.connect(); console.log('hi')
