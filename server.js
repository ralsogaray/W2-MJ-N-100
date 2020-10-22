const express = require('express')
const easyDB = require('easydb-io')

const server = express()
        //console.log(__dirname) 

const docs = express.static(__dirname + "/docs") //para que funcione en la nube, hay que redactar la ruta(URL) completa, por eso __dirname (son dos guiones bajos)
const urlencoded = express.urlencoded({ extended : true }) // <-- Convierte de FormData a Object
const json = express.json() // <-- Convierte de JSON a Object

const baseDeProductos = easyDB({
    database: 'c9a980fa-49c5-4ea4-ae1e-f82b703c8a14',
    token: '799458f1-ebbc-47eb-aa84-35fb94df1fbf'
})

server.use( docs )
server.use( urlencoded )
server.use( json )

server.listen(2000)

server.post("/agregar", async function(request, response){
    /*
        ACA DEBERIA VALIDAR LOS DATOS CON SUPER MEGA IF Y OTRAS COSAS
    */
    const ID = "P" + Math.random().toString(36).slice(2) // <-- Ej: 4x93l81yk47

    await baseDeProductos.put(ID, request.body )

    response.end("Mira la consola...")
})

server.get("/mostrar", async (req, res) => {

    const productos = await baseDeProductos.list()

    res.json(productos)
})
