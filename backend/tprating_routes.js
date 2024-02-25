const express = require("express")
const tpratingRouter = express.Router()
const { tpratingModel } = require("./tpratingModel");
const multer = require("multer");

//for reading data
// tpratingRouter.get("/tprating",async(req, res) => {
//     const data = await tpratingModel.find({})
//     res.json({success: true, data: data})
// });

// //create or post data
// tpratingRouter.post("/tpratingcreate",async(req,res)=>{
//     console.log(req.body)
//     const data = new tpratingModel({
//         dishName: req.body.dishName,
//         dishRate: req.body.dishRate
//     })
//     await data.save()
//     res.send({
//         success: true, message: "data saved successfully"
//     })
// })

tpratingRouter.get("/tprating/:dishName", async (req, res) => {
    const { dishName } = req.params;
    const data = await tpratingModel.find({ dishName });
    res.json({ success: true, data: data });
});


//create or post data
tpratingRouter.post("/tpratingcreate", async (req, res) => {
    const { dishName, dishRate } = req.body;
    const data = new tpratingModel({
        dishName,
        dishRate
    });
    await data.save();
    res.send({ success: true, message: "Data saved successfully" });
});

module.exports = {
    tpratingRouter,
}