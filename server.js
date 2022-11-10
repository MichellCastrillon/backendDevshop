const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 5000;
const cors = require("cors");

//Importar conexion MongoDB
const archivoBD = require('./src/config/conexion')

//Se define la ruta de productos
const productosRouters = require('./src/routes/productos');
//Se define la ruta del upload de la imagen de los productos
const productosRoutersUpload = require('./src/routes/upload');

app.use(
    bodyParser.json({
        limit: '20mb'
    })
)

app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

//Ruta para hacer CRUD a los productos
app.use(productosRouters)
//Se usa ruta del upload
app.use(productosRoutersUpload)

app.use(cors())

//configurar el server, se usó el puerto 5000
app.listen(port, function(){
    console.log('El servidor esta corriendo correctamente');
});

//uso el comando noder server.js
//para que nodemon funcione bien con powershell ejecuto en powershell (Set-ExecutionPolicy Unrestricted)
