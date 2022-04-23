
// Referencias del html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

// Es el socket del cliente
const socket = io();

// El on es para ir escuchando eventos
// Esta listener esta escuchando cuando se haga una coneccion
socket.on('connect', () => {
  // console.log('conectado');
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

socket.on('disconnect', () => {
  // console.log('desconectado del servidor');
  lblOffline.style.display = '';
  lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', (payload) => {
  console.log(payload);
});

btnEnviar.addEventListener('click', () => {
  const msg = txtMensaje.value;
  const payload = {
    msg,
    id: '1234ABC',
    fecha: new Date().getTime()
  }

  socket.emit('enviar-msg', payload, (id) => {
    console.log('desde el server', id);
  });
  
});