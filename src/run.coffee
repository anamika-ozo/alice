### static files ###
config = require '../static/config.json'
server = require '../static/server/server.js'
# main files
main = require './main.js'
PREFIX = require 'main.js'.PREFIX
# constants
version = require '../package.json'.version
DOMAIN_NAME = require '../static/config.json'.static.DOMAIN_NAME
# libraries
axios = require 'axios'
prompt = require 'prompt-sync' #{ sigint: true } 

compiler = 
    Elixir:
        desc: "compile a program",
        usage: `${PREFIX}`,
        deleteCommand: true,
        cooldown: 3,
        process: (client, msg, suffix) -> 
            client.on('message', message => {
                if (message.content === "#{PREFIX}iex") then 
                      code = prompt("enter your Elixir code in a code block");
                    message.reply(`for example;
                                    ````iex
                                    defmodule Hello do
                                        def sample do
                                            IO.puts "Hello World!"
                                        end
                                    end
                                    ```
                                ``);
                console.log("got the code, sending now");

                sendCode() -> 
                    axios.post '/login', 
                        firstName: 'Finn',
                        lastName: 'Williams'
                    .then((response) -> 
                        console.log(response);
                        (error) -> 
                        console.err 'err';
                    )
           	}
        )

    Scala:
    	desc:


 row_possibilities = (grid) ->
  for rows in [0..8] by 1
    for columns in [0..8] by 1
      if(Array.isArray(grid[rows][columns])
        for possible_val in grid[rows][columns] by 1
          grid = unique_row_possibility(grid, rows, columns, possible_val)
          if(Array.isArray(grid[rows][columns]) == false)
            break
        )
  return grid
                        
                    

                        

exports = { compiler };
