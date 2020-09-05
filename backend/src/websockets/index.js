const { reader } = require('../services/signature');


let rooms = {
  // 'signature': ['nickname1', 'nickname2', 'nickname3']
};


module.exports = (http) => {
  const io = require('socket.io')(http);

  io.on('connection', (socket) => {
    console.log("a user connected");
    let clientname;
    let clientRoom;
    
    socket.on("user-info", (payload) => {
      if (payload.info == 'joined')
        clientname = payload.name;

      if (!clientname)
        return;

      clientRoom = payload.signature;
      socket.join(room = clientRoom);
      if (!rooms[clientRoom])
        rooms[clientRoom] = [];
      rooms[clientRoom].push(clientname);

      let payBack = {...payload};
      delete payBack.signature;
      io.in(room = payload.signature).emit("user-info", payBack);
    });


    socket.on("new-chat", (payload) => {
      console.log("new chat: ", payload.author);
      let payBack = {...payload};
      delete payBack.signature;
      socket.to(room = payload.signature).emit('new-chat', payload);
    });


    socket.on("asking-4-participants", signature => {
      try {
        let data = {
          host: reader(signature).nickname,
          list: rooms[signature]
        };
        socket.emit('participants-list', data);
      }
      catch(e) {
        console.error(e);
      }
    });


    socket.on("check-if-name-available", ({name, signature}) => {
      let isAvailable = rooms[signature].indexOf(name) == -1;
      console.log('checking if name available name: ', name);
      console.log(rooms);
      socket.emit("name-availability", isAvailable);
    });


    socket.on("disconnect", () => {
      console.log(`${clientname} disconnected`);
      if (rooms[clientRoom]) {
        rooms[clientRoom] = rooms[clientRoom].filter(x => x != clientname);
        if (rooms[clientRoom].length == 0)
          delete rooms[clientRoom];
      }
      socket.to(room = clientRoom).emit("user-info", {name: clientname, info: 'left'});
    });
  });
};