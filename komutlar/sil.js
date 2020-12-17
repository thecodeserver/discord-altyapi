const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message, args) {
if(!args[0]) return message.channel.send("<:warning:495950887898841089> Lütfen Silinicek Mesaj Miktarını Yazın.!");

if(args[0] > 100){return;}
if(args[0] < 0){return;}

message.channel.bulkDelete(args[0] + 1).then(() => {
  const msg = message.channel.send(`<:white_check_mark:495950668725747733> ${args[0]} Adet Mesajı Sildim.`);
  msg.delete();
});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle','sil','clear'],
  permLevel: 3
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};