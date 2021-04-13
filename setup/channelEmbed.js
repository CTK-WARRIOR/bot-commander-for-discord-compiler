const $ = require("../mechanism/manipulation")

module.exports = (command, client, key) => {
let embed = {
  title: key.title ? key.title : null,
  description: key.description ? key.description : null,
  color: key.hexColor ? key.hexColor : null,
  image: key.imageURL ? { url: key.imageURL } : null,
  thumbnail: key.thumbnailURL ? { url: key.thumbnailURL } : null,
  footer: key.footer ? { text: key.footer } : null
}

Object.keys(embed).forEach(key => {
  if(!embed[key]) delete embed[key]
})

client.commands.get(command["command"]).embed = embed;
}