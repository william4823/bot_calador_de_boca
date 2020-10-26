import client from './connect'
import Discord, { Message } from 'discord.js'

class help {
    constructor(msg: Message) {
        const guild = msg.guild?.name
        const userName = msg.member?.user.id
        const botAvatar = client.user?.displayAvatarURL({format: 'png'})
        

         const message = `Olá <@${userName}>, você está no servidor ${guild} estou aqui para lhe auxiliar a mutar todos naquela partida de among us, já que você mesmo não pode fazer isso né seus comedor de cheetos, faz nada o dia inteiro e não pode se mutar sozinho! `
         const despedidas = "Sinceramente, se você não entendeu, procura um psiquiatra por quê o TDAH tá foda viu. Espero ter ajudado. VTNC tô de mal humor hoje. TÕ AQUI PRA SER ESCRAVO DE VOCÊS"
         
         const embed = new Discord.MessageEmbed()
         .setColor('#FFF')
         .setTitle(`Dando aula de comandos à @${msg.member?.user.username}` )
         .setDescription(`${message}`)
         .addField('Prefixo dos comandos, exceto comando de mute users', "cb!", true)
         .addFields(
             {name: "!calaboca", value: "o comando para mutar todos, a dinâmica é a seguinte, para que você possa ouvir suas maravilhosas musiquinhas, quando os jogadores estão mutados, os bots presentes na sala de voz não serão mutados, mas quando os jogadores estão desmutados, os bots serão mutados."  },
             {name: "cb!desmutebot", value: 'caso queira ouvir musica e conversar com seus amigos, o comando "!desmutebot" desmutará os bots.'},
             {name: 'cb!comi' , value: "Esse comando é pra zoar com a cara do amiguinho! Deu aquela comida de cu no amighinho é so usar esse comando marcando o amiguinho comido e se divertir. Teste ele ai!!"}
         )
         .setAuthor(client.user?.username, botAvatar)
         .addField('É isso ae', despedidas)
         .setImage('https://media.giphy.com/media/IpKxfPy33hMRy/giphy.gif')
        msg.channel.send(embed)
    }
}

export default help