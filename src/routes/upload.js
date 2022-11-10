const express = require('express');
const router = express.Router();

const controller= require ('../controllers/upload');

const path = 'upload';

router.post(
    `/${path}`,
    controller.upload,
    controller.uploadFile
);

module.exports = router
