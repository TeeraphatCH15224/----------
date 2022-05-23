const { EmbedBuilder } = require("discord.js");
const { OWNER_ID } = require("../../settings/config.json");

module.exports = async (client, interaction) => {
    if (interaction.isCommand())
        if (!client.slash.has(interaction.commandName)) return
        if (interaction.guilds) {   
    } 
}