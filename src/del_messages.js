(function() {
  exports.alice = function(client, msg) {
    if (!msg.channel.isPrivate) {
      return false;
    }
    return 0;
  };

}).call(this);


//# sourceMappingURL=del_messages.js.map
//# sourceURL=coffeescript