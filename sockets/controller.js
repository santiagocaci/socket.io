
const socketController = socket => {
  console.log('Cliente conectado', socket.id);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id);
  });

  socket.on('enviar-msg', (payload, callback) => {

    const id = 123456786;
    callback(id);
    // Este emit le va emitir un evento a todos los clientes conectados
    socket.broadcast.emit('enviar-mensaje',  payload);
  });
}


module.exports = {
  socketController
}