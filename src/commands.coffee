Eris = require 'eris'

echo_comand = client.registerCommand("echo", msg, args) =>

    if args.length == 0
        return "invalid input"
    
    text = args.join(" ")
    return text
    {
        description: "Make the bot say stuff",
        full_description: "The bot will echo stuff ig"
        usage: "<text>"
    }

