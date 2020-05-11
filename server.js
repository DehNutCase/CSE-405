const app = require("express")();
let http = require('http').Server(app);
let fs = require('fs');
const io = require("socket.io")(http);

const port = 8000;
  app.get("/", function(req, res) {
        res.sendFile(__dirname + "/guessing_game.html");
    });

io.on("connection", function(socket) {
    socket.on("update_status", function(data) {
        socket.broadcast.emit("update_status", data);
    });
    
    socket.on("message", function(data) {
        socket.broadcast.emit("message", data);
    });
});
 
http.listen(port, function() {
      console.log("Listening on *:" + port);
  });