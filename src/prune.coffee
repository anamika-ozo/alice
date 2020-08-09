module.exports = {
	name: 'rmMessage',
	desc: 'remove a number of messages',
	execute(message, args) {
		amount = parseInt(args[0]) + 1;

		if (is NaN(amount)) 
			return message.reply "thats not a valid number.. try again\n"	
		
		else if (amount <= 1 || amount > 100)
			return message.reply "it has to be between 1 & 99, that's all discord allows sadly D:"

		message.channel.bulkDelete
			
	}
}
