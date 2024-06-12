const express = require('express');
const router = express.Router();

const rescatistas =[
    {dni:1, nombre:"Sol", apellido: "Mejia Sile", tel: 23342334, email: "mejiasilesol@gmail.com", direccion: "calle 123", genero: "f"},
    {dni:2, nombre:"Micaela", apellido: "Mejia Vargas", tel: 6384843, email: "mica@gmail.com", direccion: "calle 9849", genero: "f"},
    {dni:3, nombre:"Candela", apellido: "animeuwuonichan", tel: 92348658, email: "cand@gmail.com", direccion: "calle 987", genero: "f"},
    {dni:4, nombre:"Maura", apellido: "garcia", tel: 37489360, email: "mau@gmail.com", direccion: "calle i34", genero: "f"},
    {dni:5, nombre:"Riana", apellido: "benitez", tel: 34545544, email: "riaben@gmail.com", direccion: "calle 784", genero: "f"}
]

//act 1
router.get("/",(req,res) => {
    res.json(rescatistas)
})

//act2
// router.get("/:dni",(req,res) => {
//     const dni = parseInt(req.params.dni);
//     const usuarios = rescatistas.find((usuario) => usuario.dni===dni);

//     if(usuarios){
//         res.send(usuarios); //muestra todos los datos del rescatista
//     }else{
//         res.status(404).send("Usuario no encontrado");
//     }
// })

//act3
router.get("/:dni",(req,res) => {
    const dni = parseInt(req.params.dni);
    const usuarios = rescatistas.find((usuario) => usuario.dni===dni);

    if(usuarios){
        res.send(usuarios.nombre); //muestra solo el nombre del rescatista
    }else{
        res.status(404).send("Usuario no encontrado...");
    }
})

module.exports = router