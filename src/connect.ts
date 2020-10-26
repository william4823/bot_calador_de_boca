import Discord from 'discord.js'
import 'dotenv/config'

import shutUp from './commands/shutUp'
import desmuteBot from './commands/demuteBot'
import help from './commands/help'
import fucker from './commands/fucker'

const client = new Discord.Client()

client.login(process.env.TOKEN_)

client.on('ready', () => {
    console.log('im on')
    client.user?.setActivity('cb!help')
})

client.on('message', (msg) => {
    if(msg.content.toLowerCase() === 'cb!admin') {
        new shutUp(msg)
     }

     if(msg.content.toLowerCase() === 'cb!desmutebot') {
        new desmuteBot(msg)
     }

     if (msg.content.toLowerCase() === "cb!help") {
         new help(msg)
     }
     
     if (msg.content.toLowerCase().indexOf('cb!comi') !== -1) {
         new fucker(msg)
     }
    }
)


export default client;