const express = require('express');
const router = express.Router()
const promiseQuery = require('../db')

// Importamos controlador
const controladorMascota = require('../controladores/mascotasControlador')

// localhost:3000/mascotas/
router.get('/', controladorMascota.obtenerMascota);
router.get("/:id", controladorMascota.obtenerMascotaId);
router.post('/', controladorMascota.crearMascota);
router.put('/:id', controladorMascota.actualizarMascota);
router.delete('/:id', controladorMascota.borrarMascota);

module.exports = router
