# Nuke-Bot
A discord bot which will help you to get rid of channels and members in an old guild.

### Points to be Noted 
- NOTE I AM NOT RESPONSABLE FOR ANY BANS TO YOUR ACCOUTNS! USE AT YOUR OWN RISK.
- You will also need to be a admin of a server to invite this bot.

Please ⭐ this repo if you like the repository.

# How To use?
Step 1: Clone this project or download the files.
- To clone the project, simply do `git clone https://github.com/BruceMacGary/Nuke-Bot.git`.

Step 2: You need to make an application in the discord developer portal and add a bot to the application, and then get the token of the bot. 
- https://discordapp.com/developers/applications
- Discord developers > create a new application
- Name it what ever you like.

- After you have done that go to the application the press "bot" then "add new bot" then press "yes"
- From there you should see a title called "Click to reveal token" press it then copy the token.
- Paste the token in the file called `config.json`, also put a prefix of your choice.
- <img align ="center" src = "https://cdn.discordapp.com/attachments/762167812936040500/785364126951800892/unknown.png">

Step 3: Add the bot to your server.
- discord developer portal > Application > Your application 
- OAuth > Select BOT on scopes and ADMIN in the perms.
- The invite will look something like - `https://discordapp.com/api/oauth2/authorize?client_id=BOTID&permissions=8&scope=bot`
- Using the link invite the bot in your server.

Then you are all done, to make the bot online.

# Self Host ( on PC )

1: Make sure you have node.js installed on your computer \[if you want to run the bot on your computer].
- https://nodejs.org
2: Type `npm install` in the terminal to install all required stuff.
3: Then type `node .` in the terminal, the bot will come online.

# 24/7 Host ( on Heroku ) 

- Fork the project, edit the config.json.
- and host it on heroku, the Profile is already provided with the files.
add the bot to the server you want to nuke.
