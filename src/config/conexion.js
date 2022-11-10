const mongoose = require('mongoose');
//se copia de la pagina mongoose, donde productos es el nombre de la base de datos
mongoose.connect('mongodb://localhost:27017/productos');

const objetobd = mongoose.connection

//Si la conexion a la base de datos fue exitosa
objetobd.on('connected',()=>{console.log('Conexion correcta a MongoDB')})
//Si hay problemas de conexion a MongoB
objetobd.on('error',()=>{console.log('Error en la conexion a MongoDB')})


//Se exporta porque se requiere usar en el server
module.exports = mongoose