(function() {
  var Eris, echo_comand;

  Eris = require('eris');

  echo_comand = client.registerCommand("echo", msg, args)(() => {
    var text;
    if (args.length === 0) {
      return "invalid input";
    }
    text = args.join(" ");
    return text;
    return {
      description: "Make the bot say stuff",
      full_description: "The bot will echo stuff ig",
      usage: "<text>"
    };
  });

}).call(this);


//# sourceMappingURL=commands.js.map
//# sourceURL=coffeescript