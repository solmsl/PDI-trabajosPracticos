const express = require('express');
const router = express.Router()
const promiseQuery = require('../config/db')

//personas

router.get('/', async (req, res) => {
  try {
    const query = "SELECT * FROM personas";

    const persona =  await promiseQuery(query)
    res.json(persona)
  } catch (error) {
    throw err
  }
})

router.get("/:dni", async (req, res) => {
  try {
    const dni = req.params.dni
    const query = "SELECT * FROM personas WHERE dni = ?"
  
    const persona = await promiseQuery(query, [dni])
    res.json(persona) 
  } catch (error) {
    throw err
  }
})

router.post('/', async (req, res) => {
  try {
    const {dni, nombre, apellido, telefono, email, direccion, genero} = req.body
    const query = "INSERT INTO personas (dni, nombre, apellido, telefono, email, direccion, genero) VALUES (?, ?, ?, ?, ?, ?, ?)"

    await promiseQuery(query, [dni, nombre, apellido, telefono, email, direccion, genero])
    res.json({message: "Persona ingresada!!!"})
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