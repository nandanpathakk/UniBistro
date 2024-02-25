const express = require("express");
const { dishlistModel } = require("./dishlistModel");
const dishlistRouter = express.Router()
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null, "./uploads")
    },
    filename: function (req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

//for reading data
dishlistRouter.get("/",async(req, res) => {
    // dishlistModel.find()
    // res.json()
    const data = await dishlistModel.find({})
    res.json({success: true, data: data})
});

//create or post data
dishlistRouter.post("/create",upload.single("dishImage"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const data = new dishlistModel({
        dishImage: {
            data: req.file.filename,
            contenType: "image"
        },
        dishName: req.body.dishName,
        dishPrice: req.body.dishPrice
    })
    await data.save()
    res.send({
        success: true, message: "data saved successfully"
    })
})


module.exports = {
    dishlistRouter,
}