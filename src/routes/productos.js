const express = require('express');
const router = express.Router();

const controller= require ('../controllers/productos')

const path = 'productos';

/**Ruta: /productos/GET*/
router.get(
    `/${path}`,
    controller.getData
);

/**Ruta: /productos/POST*/
router.post(
    `/${path}`,
    controller.insertData
);

/**Ruta: /productos/id <-Actualiza los datos*/
router.put(
    `/${path}/:id`,
    controller.updateData
);

/**Ruta: /productos/id <-Elimina los datos*/
router.delete(
    `/${path}/:id`,
    controller.deleteData
);


module.exports = router

