var config = require("../static/config.json"),
    main = require("./main.js"),
    server = require("../static/server/server.js"),
    PREFIX = require("./main.js").PREFIX,
    version = require("../package.json").version,
    avatars = require("./avatars.js"),
    // libraries for compiling
    axios = require ('axios'),
    prompt = require('prompt-sync') ({ sigint: true });

var compiler = {
    "Elixir": {
        desc: "compile a program",
        usage: `${PREFIX}`,
        deleteCommand: true,
        cooldown: 3,
        process: function(client, msg, suffix) {
            client.on('message', message => {
                if (message.content === `$(PREFIX)iex`) {
                    let code = prompt("enter your Elixir code in a code block");
                    message.reply(`for example;
                                    ````iex
                                    defmodule Hello do
                                        def sample do
                                            IO.puts "Hello World!"
                                        end
                                    end
                                    ```
                                ``);
                    console.log(`Hey there ${name}`);
                }

                const readline = require('readline').createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                readline.question('Who are you?', name => {
                    console.log(`Hey there ${name}!`);
                    readline.close();
                });console.log('compiler', compiler);


            });
        }

    }
}

exports = { compiler };
