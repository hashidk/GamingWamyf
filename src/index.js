
const express = require("express")
const app = express()
require('dotenv').config()

app.use(express.static('public'))

app.listen(process.env.PORT, function () {
    console.log("Servidor abierto en: "+process.env.URL+":"+process.env.PORT);
})