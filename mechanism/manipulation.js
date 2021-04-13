const fs = require("fs")
const keywords = []
fs.readdirSync(__dirname.replace("/mechanism","/keywords/")).forEach(file => {
  let data = require("../keywords/" + file)
  keywords.push({ name: file.replace(".js", ""), func: data.func, type: data.type, run: data.run })
})

function $(string, client) {
  if(!keywords.length) return;
  keywords.forEach(key => {
    if (key.func) {
      if (string.match(new RegExp("\\$" + key.name, "g"))) {
        let substring = key.type == "limited" ? string.match(new RegExp("\\$" + key.name + client.regex.limited, "g")) : string.match(new RegExp("\\$" + key.name + client.regex.unlimited, "g"))
        if(!substring) return;
        substring.forEach(value => {
          let result = key.run(value, client)
          string = string.replace(value, result)
        })
      } else {
        return string;
      }
    }
  })

  return string;

}

module.exports = $

