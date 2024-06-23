const promiseQuery = require('../config/db')

// Controlador de mascotas
const obtenerMascota = async (req, res) => {
  // Obtiene todos las mascotas de la base de datos
  try {
    const query = "SELECT * FROM mascotas";
    const mascotas =  await promiseQuery(query)
    
    res.json(mascotas)
  } catch (error) {
    throw err
  }
}

const obtenerMascotaId = async (req, res) => {
  try {
    const id = req.params.id
    const query = "SELECT * FROM mascotas WHERE id = ?"
  
    const mascotaId = await promiseQuery(query, [id])
    res.json(mascotaId) 
  } catch (error) {
    throw err
  }
}

const crearMascota = async (req, res) => {
  try {
    const { id, nombre_apodo, raza, color, estado_salud, anio_nacimiento  } = req.body
    const query = "INSERT INTO mascotas (id, nombre_apodo, raza, color, estado_salud, anio_nacimiento ) VALUES (?, ?, ?, ?, ?, ?)"

    await promiseQuery(query, [id, nombre_apodo, raza, color, estado_salud, anio_nacimiento ])
    res.json({message: "Mascota creada!!"})
  } catch (error) {
    throw error
  }
}

const actualizarMascota = async (req, res) => {
  try {
    const {id, nombre_apodo, raza, color, estado_salud, anio_nacimiento } = req.body
    const query = "UPDATE mascotas SET id = ?, nombre_apodo = ?, raza = ?, color = ?, estado_salud = ?, amnio_nacimiento = ?, WHERE id = ?"
    
    await promiseQuery(query, [id, nombre_apodo, raza, color, estado_salud, anio_nacimiento , req.params.id])
    res.json({message: "Mascota actualizada exitosamente"})
  } catch (error) {
    throw error
  }
}

const borrarMascota = async (req, res) => {
  try {
    const query = "DELETE FROM mascotas WHERE id = ?"

    await promiseQuery(query, [req.params.id])
    res.json({message: "Mascota borrado"})
  } catch (error) {
    throw error
  }
}

module.exports = {
  obtenerMascota,
  obtenerMascotaId,
  crearMascota,
  actualizarMascota,
  borrarMascota
}