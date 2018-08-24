const Discord = require("discord.js");
const YTDL = require("ytdl-core");
function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, messsage);
        else connection.disconnect();
    })
}
var servers = {};

module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        message.channel.send("Please specify a YouTube link");
        return
   }
   
   if(!message.member.voiceChannel) {
       message.channel.send("Umm... You need to be in a voice channel!");
   }

   if(!servers[message.guild.id]) servers[message.guild.id] = {
       queue: []
   }
   var server = servers[message.guild.id];

   server.queue.push(args[0]);
   message.channel.send("Your song was added to the queue. ")
   if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
       play(connection, message);
   })
}

module.exports.help = {
    name: "play"
}