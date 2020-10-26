import { Message } from 'discord.js'

class shutUp {
    constructor(msg: Message) {
        const channel = msg.member?.voice.channel
        let arg = msg.member?.voice.serverMute
       
        if (channel) {
            for (let member of channel.members.array()) {
                if (member.user.bot) {
                    let argBot

                    if (arg) {
                        argBot = true
                    } else {
                        argBot = false
                    }
                    member.voice.setMute(argBot)

                } else {
                    member.voice.setMute(!arg)
                }
             }
     
             arg = !(arg)
        } else {
            msg.reply('Entra na Porra do canal de voz caralho!!!!')
        }
    }
}

export default shutUp