const express = require('express');
const router = express.Router()

//importamos controlador
const persController = require('../controladores/personasControlador')

//personas
//rutas en el controlador:
router.get('/', persController.obtenerTodo);
router.post('/', persController.crear);


module.exports = router