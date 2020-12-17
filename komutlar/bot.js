const Discord = require('discord.js');

exports.run = (client, message, args) => {
  const islem = args[0]
  const sunucu = '786885520059531285'
  const author = message.author
  if(islem === 'ekle'){
    if(message.channel.id === '788049405566779443'){
    const kanal = '788049744231530537'
    const id = args[1]
    const prefix = args[2]
    const perm0 = `https://discord.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=0`
    const perm8 = `https://discord.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=8`
    message.delete()
    message.channel.send(`<@!${message.author.id}>, botun başvuruya alındı!`)
    const linkler = `[Perm 0](${perm0}) | [Perm 8](${perm8})`
    const embed = new Discord.MessageEmbed()
    .setTitle('Başvuru')
    .addFields(
      {name: 'Başvuru Sahibi:', value: author, inline: false},
      {name: 'Bot ID:', value: id, inline: false},
      {name: 'Bot Prefix:', value: prefix, inline: false},
      {name: 'Davet Linkleri:', value: linkler, inline: false},
    )
    client.guilds.cache.get(sunucu).channels.cache.get(kanal).send(embed)
    }else{
      const kanal = '788049405566779443'
      message.channel.send(`Bu komut sadece <#${kanal}> kanalında kullanılabilir`)
    }
  }
  if(islem === 'kabulet'){
    const kanal = '788049336691851296'
    const id = args[1]
    message.channel.send(`<@!${id}> isimli botu kabul ettiniz!`)
    const embed = new Discord.MessageEmbed()
    .setDescription(`:white_check_mark: | <@!${id}> isimli bot kabul edildi!`)
    client.guilds.cache.get(sunucu).channels.cache.get(kanal).send(embed)
  }
  if(islem === 'reddet'){
    const kanal = '788049336691851296'
    const author = message.mentions.users.first()
    const id = args[1]
    if(!author || !id){
      message.channel.send("Bot ID'sini ve başvuru sahibinin ID'sini girmelisiniz")
    }else{
    message.channel.send(`<@!${id}> isimli botu reddettiniz!`)
    const embed = new Discord.MessageEmbed()
    .setDescription(`:x: | <@!${id}> isimli bot reddedildi!`)
    author.send(embed)
    client.guilds.cache.get(sunucu).channels.cache.get(kanal).send(embed)
    }
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot',
  description: '',
  usage: 'bot'
}