config = require '../../static/config.json'
main = require '../../index.js'
server = require './server.js'
node_fetch = require 'node-fetch'
axios = require 'axios'

load_server = () =>
	promise = new Promise(resolve, reject) ->
		try
			axios.post('https://cdn.discordapp.com/')
			.then ->
				annoyMe();
		catch e
			# ...
		
