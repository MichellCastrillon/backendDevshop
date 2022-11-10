//importamos el modelo de la base de datos de mongoDB
const { default: mongoose } = require('mongoose');
const model = require('../models/productos')

//opciones de paginacion (para mostrar la info en el get de la API)
//limit indica la cantidadmaxima de valores de mostrar por pagina
const options = {
    page:1,
    limit:10
};

//Esta funcion lo que hace es transformar un id que yo ingrese en un ObjectId
const parseId = (id) => { 
    return mongoose.Types.ObjectId(id);
}

/**OBTENER DATA PRODUCTOS */
exports.getData = (req, res) => {
    //Se busca dentro del modelo si tiene datos, dentro de los {}, podria escribir el parametro que deseo 
    //buscar directamente ej: email: prueba@prueba.com y se colocan opciones de paginacion
    model.paginate({},options,(err,docs)=>{
        res.send({
            //o simplemnete se puede poner docs en evz de docs:docs
            items: docs
        })
    })
}

/**UPDATE DATA*/
exports.updateData = (req, res) => {
    // se asigna a la variable el objectId que se esta ingresando
    const { id } = req.params
    const body =  req.body
    //actualiza el registro donde el id sea igual al objectId que se etsa recibiendo
    model.updateOne(
        //El id de la base de datos viene "_id"y llamo la variable linea 32
        {_id: parseId(id) },
        body,
        (err,docs) => {
            res.send({
                items: docs
            })
        })
}

/**INSERTAR DATA PRODUCTOS */
exports.insertData = (req, res) => {
    // la expresion req.body hace parte del body-parser
    const data = req.body;
    //Al modelo (tabla) de mongo le vamos a crear una coleccion, retorna error o docs(informaicon)
    model.create(data, (err, docs) => {
        if(err){
            //retorna el error con un 422
            res.send({error: 'Error'}, 422);
            console.log('Error',err);
        }else{
            res.send({ data: docs });
        } 
    })
}

/**ELIMINAR DATA PRODUCTOS */
exports.deleteData = (req, res) => {
    // se asigna a la variable el objectId que se esta ingresando
    const { id } = req.params
    //actualiza el registro donde el id sea igual al objectId que se etsa recibiendo
    model.deleteOne(
        //El id de la base de datos viene "_id"y llamo la variable linea 32
        {_id: parseId(id) },
        (err,docs) => {
            res.send({
                items: docs
            })
        })
}
