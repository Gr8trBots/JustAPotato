let Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {


    let em2 = new Discord.RichEmbed()

    .setColor("#FFFF7F")
        .addField("Help", "Full help avalible [here](https://docs.hernikplays.cz/list-of-commands)")

    .setFooter(`Bot Prefix: m! -- created by hernikplays#9617 -- Report errors with m!error`)
    await message.channel.send(em2);

}

module.exports.help = {
    name: "help"
}