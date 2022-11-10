const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //todos los archivos los guardara en una carpeta llamada uploads
        cb(null, 'uploads')
    },
    //el nombre del archivo colocará el nombre del archivo mas el tiempo (por si hay repetidos)
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

//Se inidca que la configuracion que se va tomar es la previamente en la linea 3
const upload = multer({ storage: storage })

exports.upload = upload.single('myFile')

exports.uploadFile = (req,res) => {
    res.send({ data: 'Enviar un archivo' })
}

