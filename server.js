const express = require('express')

const server = express()

const docs = express.static("docs")
const urlencoded = express.urlencoded({ extended : true }) // <-- Convierte de FormData a Object
const json = express.json() // <-- Convierte de JSON a Object

let baseDeProductos = []

server.use( docs )
server.use( urlencoded )
server.use( json )

server.listen(2000)

server.post("/agregar", function(request, response){
    /*
        ACA DEBERIA VALIDAD LOS DATOS CON SUPER MEGA IF Y OTRAS COSAS
    */
    baseDeProductos.push( request.body )

    console.log(`La base de datos de productos tiene:`)
    console.log(baseDeProductos)

    response.end("Mira la consola...")
})