import { Message } from 'discord.js'

class desmuteBot {
    constructor(msg: Message) {
        const channel = msg.member?.voice.channel

        if (channel) {
            for (let member of channel.members.array()) {
                if (member.user.bot) {
                    member.voice.setMute(false)
                }
            }
        } else {
            msg.reply('Entra na Porra do canal de voz caralho!!!!')
        }
        
        
        
    }
}

export default desmuteBot