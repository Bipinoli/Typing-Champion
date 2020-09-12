module.exports = (socket) => {
  socket.on("new-chat", (payload) => {
    console.log("new chat: ", payload.author);
    let payBack = { ...payload };
    delete payBack.signature;
    socket.to(room = payload.signature).emit('new-chat', payload);
  });
};