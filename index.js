const discord = require("discord.js")
const fs = require("fs")
const client = new discord.Client()
client.regex = {
  limitedArg: /(?<=\().*(?=\))/g,
  unlimitedArg: /(?<=\{).*(?=\})/g,
  limited: "\\((?:[^)(]+|\\((?:[^)(]+|\\([^)(]*\\))*\\))*\\)",
  unlimited: "\\{(?:[^}{]+|\\{(?:[^}{]+|\\{[^}{]*\\})*\\})*\\}",
  brackets: "(?<=\\()(?:[^)(]+|\\((?:[^)(]+|\\([^)(]*\\))*\\))*(?=\\))"
}
client.commands = new discord.Collection();
console.log("1: Building the code...")


client.on("ready", () => {
  console.log("3: Bot is started : " + "Senpai")
})

client.on("message", (message) => {
  if(message.author.bot) return;
  const args = message.content.trim().split(' ');
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command)
  if(!cmd) return;
  console.log(cmd)
  return require("./mechanism/execute")(client, message, cmd)
})


require("./data.json").forEach(cmd => {
require("./mechanism/compiler.js")(cmd, client)
})

client.login("TOKEN").then(data => {
  console.log("2: Running the bot...")
})