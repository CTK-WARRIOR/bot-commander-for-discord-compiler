module.exports = (command, client, key) => {
let cmd = client.commands.get(command["command"])
cmd.channel = key
}