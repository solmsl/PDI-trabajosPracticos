const promiseQuery = require('../config/db')

const obtenerTodo = async (req, res) => {
    try {
        const query = "SELECT * FROM personas";
    
        const persona =  await promiseQuery(query)
        res.json(persona)
    } catch (error) {
        throw err
    }
}

const obtenerconId = async (req,res) => {
    try {
        const dni = req.params.dni
        const query = "SELECT * FROM personas WHERE dni = ?"
      
        const persona = await promiseQuery(query, [dni])
        res.json(persona) 
    } catch (error) {
        throw err
    }
}  

const crear = async (req,res) => {
    try {
        const {dni, nombre, apellido, telefono, email, direccion, genero} = req.body
        const query = "INSERT INTO personas (dni, nombre, apellido, telefono, email, direccion, genero) VALUES (?, ?, ?, ?, ?, ?, ?)"

        await promiseQuery(query, [dni, nombre, apellido, telefono, email, direccion, genero])
        res.json({message: "Persona ingresada!!!"})
    } catch (error) {
        throw error
    }
}

const actualizar = async (req,res) => {
    try {
        const { dni } = req.params
        const { nombre, apellido, telefono, email, direccion, genero } = req.body
    
        const query = "UPDATE `personas` SET nombre = ?, apellido = ?, telefono = ?, email = ?, direccion = ?, genero = ? WHERE dni = ?"
    
        const persona =  await promiseQuery(query, [nombre, apellido, telefono, email, direccion, genero, dni])
        res.json({message: "Persona actualizada con exito."})
    } catch (err) {
        throw err
    }
}

const borrar = async (req,res) => {
    try {
        const { dni } = req.params

        const query = "DELETE FROM `personas` WHERE dni = ?"

        await promiseQuery(query, [dni])
        res.json({message: "Persona Eliminada"})
    } catch (err) {
        throw err
    }
}

module.exports = {
    obtenerTodo,
    obtenerconId,
    crear,
    actualizar,
    borrar
} 