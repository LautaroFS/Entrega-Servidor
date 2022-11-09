const express = require("express")
const classContainer = require("./container/archivo.Container")

const app = express()
const PORT = 8090

const archivo = new classContainer("productos.js")


const server = app.listen(PORT, () => {
    console.log(`Servidor en ${PORT}`)
})

app.get("/productos", async (req, res) => {
    const prods = await archivo.leer()
    console.log(prods)

    res.send({
        Productos: prods
    })
})

app.get("/random", async (req, res) => {
    const prods = await archivo.leer()
    const random = parseInt(Math.random() * prods.length)
    res.send({
        Productos: prods[random]
    })
})

