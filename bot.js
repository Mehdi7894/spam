const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("549933416687337483")
setInterval(function() {
channel.send(`استغر الله عضيم واتوب اليه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
