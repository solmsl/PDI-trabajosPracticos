const express = require('express');
const router = express.Router();

const histoController = require('../controladores/histoControlador');

//rutas en el controlador:
router.get('/', histoController.obtenerTodos);
router.get("/:id", histoController.obtener);
router.post('/', histoController.crear);
router.put('/:id', histoController.actualizar);
router.delete('/:id', histoController.borrar);

module.exports = router