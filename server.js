"use strict"

const express = require("express")
const route = require("./src/routes/routes.js") 
const app = express()

app.use("/", route)
let port = 4000

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Web server listening on port ${port}`)
})


 
