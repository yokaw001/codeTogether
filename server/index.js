var http = require("http");
var app = require("./app.js");

var server = http.createServer(app);
var PORT = 7000;

server.listen(PORT, err => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("His Power Level...Its Over...", PORT, "Kakarot!!");
  }
});
