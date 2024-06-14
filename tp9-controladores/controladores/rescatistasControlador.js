const promiseQuery = require('../config/db')

const obtenerTodo = async (req, res) => {
    try {
        const query = "SELECT * FROM rescatistas";
    
        const rescatista =  await promiseQuery(query)
        res.json(rescatista)
    } catch (error) {
        throw err
    }
}

const obtenerconId = async (req,res) => {
    try {
        const dni = req.params.dni
        const query = "SELECT * FROM rescatistas WHERE dni = ?"
      
        const rescatista = await promiseQuery(query, [dni])
        res.json(rescatista) 
    } catch (error) {
        throw err
    }
}  

const crear = async (req,res) => {
    try {
        const {dni, nombre, apellido, telefono, email, direccion, genero} = req.body
        const query = "INSERT INTO rescatistas (dni, nombre, apellido, telefono, email, direccion, genero) VALUES (?, ?, ?, ?, ?, ?, ?)"

        await promiseQuery(query, [dni, nombre, apellido, telefono, email, direccion, genero])
        res.json({message: "Rescatista ingresado!!!"})
    } catch (error) {
        throw error
    }
}

const actualizar = async (req,res) => {
    try {
        const { dni } = req.params
        const { nombre, apellido, telefono, email, direccion, genero } = req.body
    
        const query = "UPDATE `rescatistas` SET nombre = ?, apellido = ?, telefono = ?, email = ?, direccion = ?, genero = ? WHERE dni = ?"
    
        const persona =  await promiseQuery(query, [nombre, apellido, telefono, email, direccion, genero, dni])
        res.json({message: "Rescatista actualizada con exito."})
    } catch (err) {
        throw err
    }
}

const borrar = async (req,res) => {
    try {
        const { dni } = req.params

        const query = "DELETE FROM `rescatistas` WHERE dni = ?"

        const producto =  await promiseQuery(query, [dni])
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
