var config = require("../static/config.json"),
    main = require("./main.js"),
    PREFIX = require("./main.js").PREFIX,
    version = require("../package.json").version,
    avatars = require("./avatars.js"),
    // libraries for compiling
    prompt = require('prompt');



var compiler = {
    "Elixir": {
        desc: "compile a program",
        usage: `${PREFIX}`,
        deleteCommand: true,
        cooldown: 3,
        process: function(client, msg, suffix) {
            client.on('message', message => {
                if (message.content === `$(PREFIX)iex`) {
                    message.reply("enter your Elixir code in a code block;");
                    message.reply(`for example;
                    				````iex
                    				defmodule Hello do
   										def sample do
       										IO.puts "Hello World!"
   										end
									end
									```
								``);

                }
            });
        }

    }
}


exports = { compiler };