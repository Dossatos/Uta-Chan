const Discord = require('discord.js');
const client = new Discord.Client();
const Music = require('discord.js-musicbot-addon');
const bottoken = process.env.token;
const yttoken = process.env.yttoken;

Music.start(client, {
  youtubeKey: (yttoken),
  prefix: "!",
  leaveAlt: ["levi", "unicorns"],
  helpCmd: "help",
});

client.login(bottoken);
console.log(`Uta Chan is now online`);