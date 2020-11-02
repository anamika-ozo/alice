module.exports = {
	name: 'rmMessage',
	desc: 'remove a number of messages',
	execute(message, args)
		allowed = (
        	msg.member?.permissionsIn(msg.channel)?.has("MANAGE_MESSAGES")
    	)

    	if not allowed then return msg.channel.send [
        	"You don’t have permission to manage messages
            	in this channel, #{msg.author}."
        	"#{msg.author}, You can’t do that, you don’t have permissions to do so."
        	"Sorry #{msg.author}, but you’re not allowed to delete messages."
    	].choose()


		amount = parseInt(args[0]) + 1;

		if (is NaN(amount)) 
			return message.reply "thats not a valid number.. try again\n"	
		
		else if (amount <= 1 || amount > 100)
			return message.reply "it has to be between 1 & 99, that's all discord allows sadly D:"

		message.channel.bulkDelete(amount);

		msg.channel.fetchMessages(limit: amount)
    		.then (msgs) ->
       			msg.channel.bulkDelete msgs
    		.then ->
        		msg.channel.send [
            	"#{msg.author}, I deleted #{amount} messages."
            ]
			
}
