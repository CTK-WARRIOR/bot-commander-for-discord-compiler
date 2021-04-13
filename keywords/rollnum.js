module.exports = {
  func: true,
  type: "limited",
  run: (string, client) => { 
    let $ = require("../mechanism/manipulation.js")  
    string = string.match(new RegExp(client.regex.brackets, "g")).length ? $(string.match(new RegExp(client.regex.brackets, "g"))[0], client) : string

    const [min, max] = string.split(",").map(string => parseInt(string))
    return Math.floor(Math.random() * (max - min) + min);
  }
}