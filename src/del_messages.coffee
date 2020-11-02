exports.alice = (client, msg) ->
    if !msg.channel.isPrivate
        return false
    return 0

