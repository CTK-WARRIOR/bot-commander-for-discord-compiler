const compiler = (command, client) => {
  if (!command["command"] || command["isRoleAssigner"]) return;
  else client.commands.set(command["command"], {
    name: command["command"]
  })

  Object.keys(command).forEach(key => {
    if (!command[key]) return;
    try {
      require(`../setup/${key}`)(command, client, command[key])
    } catch (err) {
      return;
    }
  })
}

module.exports = compiler;