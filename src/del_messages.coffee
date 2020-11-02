command(client, ['cc', 'clearchannel'], (message) => 
    if message.member.hasPermission 'ADMINISTRATOR'
        message.chanel.messages.fetch().then(results) =>
            message.chanel.bulkDelete results
        console.log results
)

command(client, 'status', message =>
    content = message.content.replace('!status ','')
    # !status uwu -> uwu
    client.user.setPresence(
        activity:
            name: content,
            type: 0
    )
)
