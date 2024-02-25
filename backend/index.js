const express = require('express')
const cors= require("cors")
//const mongoose = require("mongoose")
const multer = require("multer")
const { connection } = require("./db")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

const PORT = process.env.PORT || 5000

//main list
const { dishlistRouter } = require("./dishlist_routes")
app.use(dishlistRouter)

//Everyday lists
const { messRouter } = require("./mess_routes")
app.use(messRouter)
const { canteenRouter } = require("./canteen_routes")
app.use(canteenRouter)
const { tpRouter } = require("./tp_routes")
app.use(tpRouter)

//For rating
const { messratingRouter } = require("./messrating_routes")
app.use(messratingRouter)
const { canteenratingRouter } = require("./canteenrating_routes")
app.use(canteenratingRouter)
const { tpratingRouter } = require("./tprating_routes")
app.use(tpratingRouter)

// for preordering
const { messorderRouter } = require("./messorder_routes")
app.use(messorderRouter)
const { canteenOrderRouter, canteenorderRouter } = require("./canteenorder_routes")
app.use(canteenorderRouter)
const { tporderRouter } = require("./tporder_routes")
app.use(tporderRouter)

app.get('/', (req, res) => {
    res.send({
        message: "api is working now"
    })
})

// mongoose.connect("mongodb://localhost:27017/messmaster")
// .then(()=>{
    console.log("Connected to DB")
    app.listen(PORT,async()=>{
        console.log("Server running")
        console.log(`Example app listening on port http://localhost:${PORT}`)
    })
// })
// .catch((err)=>{
//     console.log(err)
// })