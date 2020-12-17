const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    message.delete();
    message.channel.send(mesaj);
};

exports.conf = {
    enabled: true,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: 'yaz',
    description: "BOT'a mesaj yazdırır",
    usage: 'yaz'
};