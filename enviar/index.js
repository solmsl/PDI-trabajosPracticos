const express=require('express');
const app=express();
const port = 3000;

const usurouter = require('./routes/rescatistas')

app.use('/rescatistas',usurouter)

app.get("/",(request,response)=>{
    response.send("Inicio pagina de mascotas")
})

app.listen(3000,function() { //tiene que estar debajo de todo
    console.log("La app funciona");
})
