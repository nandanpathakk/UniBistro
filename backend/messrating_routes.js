const express = require("express")
const messratingRouter = express.Router()
const { messratingModel } = require("./messratingModel");
const multer = require("multer");

//for reading data
// messratingRouter.get("/messrating",async(req, res) => {
//     const data = await messratingModel.find({})
//     res.json({success: true, data: data})
// });

// //create or post data
// messratingRouter.post("/messratingcreate",async(req,res)=>{
//     console.log(req.body)
//     const data = new messratingModel({
//         dishName: req.body.dishName,
//         dishRate: req.body.dishRate
//     })
//     await data.save()
//     res.send({
//         success: true, message: "data saved successfully"
//     })
// })

messratingRouter.get("/messrating/:dishName", async (req, res) => {
    const { dishName } = req.params;
    const data = await messratingModel.find({ dishName });
    res.json({ success: true, data: data });
});


//create or post data
messratingRouter.post("/messratingcreate", async (req, res) => {
    const { dishName, dishRate } = req.body;
    const data = new messratingModel({
        dishName,
        dishRate
    });
    await data.save();
    res.send({ success: true, message: "Data saved successfully" });
});


module.exports = {
    messratingRouter,
}