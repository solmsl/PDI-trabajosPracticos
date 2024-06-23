const express = require('express');
const router = express.Router()

//importamos controlador
const persController = require('../controladores/personasControlador')

//personas
//rutas en el controlador:
router.get('/', persController.obtenerTodo);
router.post('/', persController.crear);
router.get('/:dni', persController.obtenerconId);
router.put('/:dni', persController.actualizar);
router.delete('/:dni', persController.borrar);

module.exports = router