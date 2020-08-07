# @flow
### static files ###
config = require './static/config.json'
server = require './static/server/server.js'
# main files
main = require './index.js'
PREFIX = require 'index'.PREFIX
# constants
version = require '../package.json'.version
DOMAIN_NAME = require '../static/config.json'.static.DOMAIN_NAME
# libraries
axios = require 'axios'
prompt = require 'prompt-sync'#{ sigint: true }

exports.run = run