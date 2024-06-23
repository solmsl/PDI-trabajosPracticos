const promiseQuery = require('../config/db')

// Controlador de productos

const obtenerTodos = async (req, res) => {
  // Obtiene todos los usuarios de la base de datos
  try {
    const query = "SELECT * FROM historial";

    const histo_medico =  await promiseQuery(query)
    // const productos = await Productos.findAll()
    
    res.json(histo_medico)
  } catch (error) {
    throw err
  }
}

const obtener = async (req, res) => {
  try {
    const id = req.params.id
    const query = "SELECT * FROM his WHERE id = ?"
  
    const histo_medico = await promiseQuery(query, [id])
    res.json(histo_medico) 
  } catch (error) {
    throw err
  }
}

const crear = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body
const query = "INSERT INTO historial (id, castrado, operado, discapacidad, rabia, enfermedades, desparasitados) VALUES (?, ?, ?, ?, ?, ?, ?)"

    await promiseQuery(query, [id, castrado, operado, discapacidad, rabia, enfermedades, desparasitados])
    res.json({message: "Historial creado!!!"})
  } catch (error) {
    throw error
  }
}

const actualizar = async (req, res) => {
  try {
    const {id, castrado, operado, discapacidad, rabia, enfermedades, desparasitados} = req.body
    const query = "UPDATE historial SET id = ?, castrado = ?, operado = ?, discapacidad = ?, rabia = ?, enfermedades = ?, desparasitados = ?"
    
    await promiseQuery(query, [castrado, operado, discapacidad, rabia, enfermedades, desparasitados, req.params.id])
    res.json({message: "Historial actualizado exitosamente"})
  } catch (error) {
    throw error
  }
}

const borrar = async (req, res) => {
  try {
    const query = "DELETE FROM historial WHERE id = ?"

    await promiseQuery(query, [req.params.id])
    res.json({message: "Historial borrado"})
  } catch (error) {
    throw error
  }
}

module.exports = {
  obtenerTodos,
  obtener,
  crear,
  actualizar,
  borrar
}