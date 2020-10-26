import Discord, { Message } from 'discord.js'
import client from './connect'

class fucker {
    constructor(msg: Message) {
        const gifs = [
            'https://media.giphy.com/media/iPUBFuFgofqdG/giphy.gif',
            'https://media.giphy.com/media/t0MUo5gHUUADu/giphy.gif',
            'https://media.giphy.com/media/10lj0ifd31Ww7K/giphy.gif',
            'https://media.giphy.com/media/ic1xNgehtvIQFpERJF/giphy.gif',
            'https://media.giphy.com/media/YP8UjfBefffX2/giphy.gif',
            'https://media.giphy.com/media/VG4qZ8bbtkLrG/giphy.gif',
            'https://media.giphy.com/media/SDkwQeppxqUMw/giphy.gif'
        ]

        const randomGIF = gifs[Math.floor(Math.random() * gifs.length)]
        const mentioned = msg.mentions.users.first()
        const typerAvatar = msg.author.displayAvatarURL({format : 'png'})
        const mentionedAvatar = mentioned?.displayAvatarURL({format: 'png'}).toString()

        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author.username, typerAvatar)
        .setTitle(`Eita porra comeu o cu`)
        .setDescription(`Carai, Vocês viram o/a <@${msg.author.id}>, comeu o cu do/da <@${mentioned?.id}>`)
        .setImage(randomGIF)
        .setThumbnail(mentionedAvatar || '')
        .setFooter(`AIIIIII QUE GOSTOSO`)
        .setColor('#FFF')

       if (mentioned) {
        msg.channel.send(embed)
       } else {
           msg.reply('tu é burro oh caralho, tu precisa marcar o amigo o porra!')
       }
    }
}

export default fucker