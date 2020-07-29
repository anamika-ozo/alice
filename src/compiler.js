/* static files */
var config = require("../static/config.json"),
    server = require("../static/server/server.js"),
/* main files */
    main = require("./main.js"),
    PREFIX = require("./main.js").PREFIX,
    avatars = require("./avatars.js"),
/* constant variables */
    version = require("../package.json").version,
    DOMAIN_NAME = require("../static/config.json").DOMAIN_NAME,
/* libraries for compiling */
    axios = require ('axios'),

var compiler = {
    "Elixir": {
        desc: "compile a program",
        usage: `${PREFIX}`,
        deleteCommand: true,
        cooldown: 3,
        process: function(client, msg, suffix) {
            client.on('message', message => {
                if (message.content === `$(PREFIX)iex`) {
                    message.reply("enter your Elixir code in a code block");
                    message.reply(`for example;
                                    ````iex
                                    defmodule Hello do
                                        def sample do
                                            IO.puts "Hello World!"
                                        end
                                    end
                                    ```
                                ``);
                    message.scan.

                    console.log("got the code, sending now");

                    function sendCode() {
                        axios.post('/login', {
                            firstName: 'Finn',
                            lastName: 'Williams'
                        })
                        .then((response) => {
                            console.log(response);
                        },  (error) => {
                            console.log(error);
                        });
                    }
                }


            });
        }

    }
}

exports = { compiler };
