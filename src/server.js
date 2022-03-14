// Archivo del Servidor HTTP
// Incluimos el paquete HTTP
const http = require('http');
// Incluimos el paquete express
const express = require('express');
// Creamos una App de Express
const app = express();
// Declaramos el puerto del Servidor
const port = 3000;
// Incluimos el paquete path
const path = require('path');
// Incluir Morgan (Seguimiento de las Peticiones HTTP)
//const morgan = require('morgan');
// Enlazamos la App con un servidor HTTP
const server = http.createServer(app);


/******************************************************/
app.use(express.urlencoded({extended:false}));
// Esto le permite al servidor recibir o enviar .json
app.use(express.json());
// Configurar los archivos estáticos del servidor
app.use(express.static('src'));
/*------------------------------------------------------*/

app.get('/login', function(req, res){
  res.sendFile(path.resolve(__dirname,'./frontend/app.html'))
});

// Inicializar el servidor
server.listen(port, ()=>{
  console.log("Server on: http://localhost:"+port);
 // console.log(path.resolve(__dirname,'./frontend/app.html'));
});