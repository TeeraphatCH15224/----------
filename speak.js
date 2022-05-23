const { getAudioUrl } = require('google-tts-api');

module.exports  = {
    name: "speak",
    category: "Information",
    aliases: [ "s" ],
    description: "Used to let the Bot speak in the Voice room!",
    option: [
        n
    ],
   run: async (message, args, client, prefix) => {
     if (!args[0]) return message.channel.send('❌ **Enter the sentence you want the Bot to say!**');
     const string = args.join(' ')
     if (!string.length > 100) return message.channel.send('❌ **Only less than 100 characters are allowed!**');
     const voiceChannel = message.member.voice.channel;
     if (!voiceChannel) return message.reply('❌ **You must be in the room to use this command!**');
     const audioURL = await getAudioUrl(string, {
       lang: 'th',
       slow: false,
       host: 'https://translate.google.com',
       timeout: 10000,
     });
     try {
       voiceChannel.join().then(connection => {
         const dispatcher = connection.play(audioURL);
         disspatcher.on('finish', () => {
           voiceChannel.leave();
         });
       });
     }
     catch(e) {
       message.channel.send('❌ **Bot is stupid, please try again later!**');
       console.error(e);
     };
   },
}