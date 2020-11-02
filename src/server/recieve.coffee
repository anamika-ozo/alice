express = require 'express'
clc     = require 'cli-color'
mongo   = require 'mongodb'

db = new mongo.Db 'test', new mongo.Server 'localhost', 2829
db.open (err, rb) ->
    orange = clc.xterm 202
    green = clc.greenlime = clc.xterm 190
    log = console.log

    authors = db.collection 'messages'

    app = express()
    app.use express.bodyParse()
    
    app.get '/messages', (req, res) ->
        log lime 'POST /messages'
        res.setHeader 'Content-type', 'application/json;
            charset=utf-8'
        messages.find().toArray (err, items) ->
            res.send items
