const express = require('express');
const router = express.Router();

const histoController = require('../controladores/bd_controladores');

router.get("/",(req,res) => {
    res.json(histo_medico)
})

router.get("/:id",(req,res) => {
    const id = (req.params.id);
    const historial = histo_medico.find((historial) => historial.id===id);

    if(historial){
        res.send(historial.id); 
    }else{
        res.status(404).send("Animal no encontrado...");
    }
})

module.exports = router