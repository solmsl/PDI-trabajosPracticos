const express = require('express');
const router = express.Router()
const promiseQuery = require('../config/db')

//importamos el controlador
const resController = require('../controladores/personasControlador')

router.get('/', resController.obtenerTodo);
router.post('/', resController.crear);
router.post('/:dni', resController.obtenerconId);
router.post('/:dni', resController.actualizar);
router.post('/:dni', resController.borrar);

module.exports = router