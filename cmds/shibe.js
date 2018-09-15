const talkedRecently = new Set();
const Discord = module.require("discord.js");
const superagent = require("superagent");
let unirest = require("unirest");
module.exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        return message.channel.send(`${message.author.username} please wait 15 seconds before using that command again!`);
    }
    else {
        unirest.get(`http://shibe.online/api/shibe`)
        .header("Accept", "text/plain")
        .end(function (result) {
            console.log(result.body)
          let e = new Discord.RichEmbed()
          .setDescription("Wow!")
          .setImage(result.body)
          .setFooter("Shibes delivered with much **wow** by shibe.online")
          
          message.channel.send(e);
          
        });

    talkedRecently.add(message.author.id); //cooldown
        setTimeout(() => {
         
          talkedRecently.delete(message.author.id);
        }, 15000);
    }
}

module.exports.help = {
    name: "shibe"
}