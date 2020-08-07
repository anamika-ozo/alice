// @flow

var 
    config = require("../static/config.json"),
    DOMAIN_NAME = require("../static/config.json").DOMAIN_NAME,
    main = require("./index.js"),
    axios = require ('axios');


function sendCode() {
    axios.post('/login', {
        iexCode: codeBlock,
    })
        .then((response) => {
           console.log(response);
        },  (error) => {
           console.log(error);
    });
}


var compiler = {
    "Elixir": {
        desc: "compile a program",
        usage: "${PREFIX}",
        deleteCommand: true,
        cooldown: 3,
        process: function(client, msg, suffix) {
            client.on('message', message => {
                if (message.content === `$(PREFIX)iex`) {
                    message.reply("enter your Elixir code in a code block");
                    message.reply(`for example;
                                    \`\`\`iex
                                    defmodule Hello do
                                        def sample do
                                            IO.puts "Hello World!"
                                        end
                                    end
                                    ``\`\`
                                `);

                    console.log("got the code, sending now");

                }


            });


        }

    }
};

exports = { compiler };
