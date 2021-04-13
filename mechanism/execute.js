const $ = require("./manipulation")

const execute = async (client, message, cmd) => {
  if (cmd.embed) {
    Object.keys(cmd.embed).forEach(value => {
      if(Object.keys(cmd.embed[value]).length) {
        Object.keys(cmd.embed[value]).forEach(vx => {
          typeof cmd.embed[value][vx] === "string" ? cmd.embed[value][vx] = $(cmd.embed[value][vx], message.client) : ""
        })
      } else {
        typeof cmd.embed[value] === "string" ? cmd.embed[value]= $(cmd.embed[value], message.client) : ""
      }
    })
  }



let channel = message.channel;
if(cmd.channel) channel = client.channels.cache.get(cmd.channel) || await client.channels.fetch(cmd.channel).catch(err => {})

return channel.send(cmd.content ? cmd.content : "", {embed: cmd.embed})
}

module.exports = execute;