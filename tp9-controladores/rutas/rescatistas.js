const express = require('express');
const router = express.Router()
const promiseQuery = require('../config/db')

// /rescatistas

// localhost:3000/rescatistas/
router.get('/', async (req, res) => {
  try {
    const query = "SELECT * FROM rescatistas";

    const rescatista =  await promiseQuery(query)
    res.json(rescatista)
  } catch (error) {
    throw err
  }
})

router.get("/:dni", async (req, res) => {
  try {
    const dni = req.params.dni
    const query = "SELECT * FROM rescatistas WHERE dni = ?"
  
    const rescatista = await promiseQuery(query, [dni])
    res.json(rescatista) 
  } catch (error) {
    throw err
  }
})

router.post('/', async (req, res) => {
  try {
    const {dni, nombre, apellido, telefono, email, direccion, genero} = req.body
    const query = "INSERT INTO rescatistas (dni, nombre, apellido, telefono, email, direccion, genero) VALUES (?, ?, ?, ?, ?, ?, ?)"

    await promiseQuery(query, [dni, nombre, apellido, telefono, email, direccion, genero])
    res.json({message: "Rescatista ingresado!!!"})
  } catch (error) {
    throw error
  }
})

// router.put('/:dni', async (req, res) => {
//   try {
//     const { dni } = req.params
//     const { nombre, apellido, telefono, email, direccion, genero } = req.body

//     const query = "UPDATE `rescatistas` SET nombre = ?, apellido = ?, telefono = ?, email = ?, direccion = ?, genero = ? WHERE dni = ?"

//     const rescatista =  await promiseQuery(query, [nombre, apellido, telefono, email, direccion, genero, dni])
//     res.json(rescatista)
//   } catch (err) {
//     throw err
//   }
// });

// router.delete('/:dni', async (req, res) => {
//   try {
//     const { dni } = req.params

//     const query = "DELETE FROM `rescatistas` WHERE dni = ?"

//     const producto =  await promiseQuery(query, [dni])
//     res.json(producto)
// } catch (err) {
//     throw err
//   }
// });

module.exports = router