config = require '../../static/config.json'
main = require '../main.js'
server = require 'server.js'
node_fetch = require 'node-fetch'
axios = require 'axios'

promise = new Promise() ->
	try
		axios.await 'DOMAIN_NAME'
	catch e
		
	

