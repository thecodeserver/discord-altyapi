const Discord = require('discord.js');
const { prefix } = require('../ayarlar.json');

exports.run = (client, message, args) => {
    let user = message.author;
    const targetMember = message.guild.members.cache.get(user.id);
  
    if(!args[0]){
      const embed = new Discord.MessageEmbed()
        .setTitle("Bölüm Seçme Yardım")
        .setDescription(`
            **${prefix}bölüm-seç html** | HTML bölümünü seçersin
            **${prefix}bölüm-seç js** | Javascript bölümünü seçersin
            **${prefix}bölüm-seç discord-bot** | Discord Bot bölümünü seçersin
        `)
      
      message.channel.send(embed);
    }
  
    else if(args[0] === 'html'){
      targetMember.roles.add('786886496430587944');
      return message.channel.send('HTML rolü verildi.');
    }
  
  else if(args[0] === 'js'){
      targetMember.roles.add('786886498959360000');
      return message.channel.send('Javascript rolü verildi.');
    }
  
  else if(args[0] === 'discord-bot'){
      targetMember.roles.add('787978252802719744');
      return message.channel.send('Discord Bot rolü verildi.');
  }
  
  else{
    return message.channel.send('Böyle bir bölüm yok.');
  }
};

exports.conf = {
    enabled: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'bölüm-seç',
    description: "...",
    usage: 'bölüm-seç'
};