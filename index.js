const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const TOKEN =
  "MTE1NjkzMjc2NTUzOTkxMzgzOA.GAEv2m.om9NZxLC3xmRYgSHvLadJfT7AGNn8dTaYHmGng";
client.login(TOKEN);

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.content === "Hail ZETK!") {
    message.reply("卐 Hail Timofeenko! 卐");
  }
});
