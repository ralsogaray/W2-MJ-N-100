const express = require('express')

const server = express()

const docs = express.static("docs")
const urlencoded = express.urlencoded({ extended : true }) // <-- Convierte de FormData a Object
const json = express.json() // <-- Convierte de JSON a Object

server.use( docs )
server.use( urlencoded )
server.use( json )

server.listen(2000)

server.post("/procesar", function(request, response){
    console.log(request.body.nombre)
    response.end("Mira la consola...")
})