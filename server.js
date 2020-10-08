const express = require('express')
const easyDB = require('easydb-io')

const server = express()

const docs = express.static("docs")
const urlencoded = express.urlencoded({ extended : true }) // <-- Convierte de FormData a Object
const json = express.json() // <-- Convierte de JSON a Object

const baseDeProductos = easyDB({
    database: 'a4fa64d4-7de9-4e01-8bfb-a5221eced744',
    token: 'baf07f7c-f47c-4d6d-b1f1-a19a8b12f3bd'
})

server.use( docs )
server.use( urlencoded )
server.use( json )

server.listen(2000)

server.post("/agregar", async function(request, response){
    /*
        ACA DEBERIA VALIDAR LOS DATOS CON SUPER MEGA IF Y OTRAS COSAS
    */
    await baseDeProductos.put('1823y49172t', request.body )

    response.end("Mira la consola...")
})