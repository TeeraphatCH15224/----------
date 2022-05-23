const figlet = require('figlet');
const chalk = require('chalk');
const { GUILD_ID, TOKEN, CHANNEL_ID } = require("../../settings/config.json");

module.exports = async (client) => {
  figlet(client.user.tag, function(err, data) {
    if (err) {
        console.dir(err);
        return;
    }
    console.log(chalk.red.bold(data));
    console.log(`[INFOMATION]Logged in as ${client.user.tag}! | Ping ${client.ws.ping} ms! | Api ${client.ws.ping} ms!`);
    client.user.setActivity(`Ping ${client.ws.ping} | Source code Liliana v 0.1`, { type: 'WATCHING' });
    
  });
}