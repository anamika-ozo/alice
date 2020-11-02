(function() {
  var clc, db, express, mongo;

  express = require('express');

  clc = require('cli-color');

  mongo = require('mongodb');

  db = new mongo.Db('test', new mongo.Server('localhost', 2829));

  db.open(function(err, rb) {
    var app, authors, green, log, orange;
    orange = clc.xterm(202);
    green = clc.greenlime = clc.xterm(190);
    log = console.log;
    authors = db.collection('messages');
    app = express();
    app.use(express.bodyParse());
    return app.get('/messages', function(req, res) {
      log(lime('POST /messages'));
      res.setHeader('Content-type', 'application/json; charset=utf-8');
      return messages.find().toArray(function(err, items) {
        return res.send(items);
      });
    });
  });

}).call(this);


//# sourceMappingURL=recieve.js.map
//# sourceURL=coffeescript