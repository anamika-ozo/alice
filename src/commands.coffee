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

say_hi = client.registerCommand("sayHi", msg, args) =>
    if msg.contnet == "H-HEWWOO"
        msg.reply "HEWOOO FWEMBB!"
    
    {
        description: "Make the bot say hi"
        full_description: "...very enthusiastically"
        usage: "#{doc_path}/sayHi"
    }