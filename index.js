const { Intents, Client, Collection, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.config = require("./settings/config.json");
if(!client.token) client.token = client.config.TOKEN;

process.on('unhandledRejection', error => console.log(error));
process.on('uncaughtException', error => console.log(error));

["slash", "commands"].forEach(x => client[x] = new Collection());
["loadEvents", "loadCommands"].forEach(file => require(`./handlers/${file}`)(client));

client.login(client.token)
