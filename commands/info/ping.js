module.exports = {
  name: "ping",
  description: "Show the Bot's ping",

  run: async (client, interaction ) => {
      interaction.reply({
          content: `:ping_pong: **PONG! Api Ping is: \`${client.ws.ping}ms\`**`,
          ephemeral: true
      }).catch(() => null);
  },
};