const express = require('express');
const router = express.Router()
const promiseQuery = require('../config/db')

//importamos el controlador
const resController = require('../controladores/personasControlador')

router.get('/', resController.obtenerTodo);
router.post('/', resController.crear);
router.get('/:dni', resController.obtenerconId);
router.put('/:dni', resController.actualizar);
router.delete('/:dni', resController.borrar);

module.exports = router