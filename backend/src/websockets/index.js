module.exports = (http) => {
  const io = require('socket.io')(http);
  io.on('connection', (socket) => {
    console.log("a user connected");
    let clientname;
    
    socket.on("user-info", (payload) => {
      console.log("user info: ", payload);
      if (payload.info == 'joined')
        clientname = payload.name;
      io.emit("user-info", payload);
    });

    socket.on("new-chat", (payload) => {
      console.log("new chat: ", payload);
      socket.broadcast.emit('new-chat', payload);
    });

    socket.on("disconnect", () => {
      console.log(`${clientname} disconnected`);
      socket.broadcast.emit("user-info", {name: clientname, info: 'left'});
    });
  });
};