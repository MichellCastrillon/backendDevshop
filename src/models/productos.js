const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const eschema = mongoose.Schema

const eschemaproductos = new eschema(
    {
    imagen: {
        type: String
    },
    nombre: {
        type: String
    },
    categoria: {
        type: String
    },
    precio: {
        type: String
    },
    cantidadStock: {
        type: String
    },
},
{
    //Se coloca el versionkey false para que no salga en el postamn la propiedad "__v:0" y el timestamps
    // guarda por defecto la fecha de creacion y la fecha de actualizacion
    versionKey: false,
    timestamps: true
}
)
//se llama a mongoosePaginate, para que se muestre la data al llamar el get no se muestre de una vez 
//todos los datos
eschemaproductos.plugin(mongoosePaginate);
//Se le coloca nombre a los modelos, como se le colcoaria nombre a una tabla en sql
//El nombre del modelo es "productos" y va usar el eschema creado
module.exports = mongoose.model('productos',eschemaproductos)