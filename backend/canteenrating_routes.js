const express = require("express")
const canteenratingRouter = express.Router()
const { canteenratingModel } = require("./canteenratingModel");
const multer = require("multer");

//for reading data
canteenratingRouter.get("/canteenrating/:dishName", async (req, res) => {
    const { dishName } = req.params;
    const data = await canteenratingModel.find({ dishName });
    res.json({ success: true, data: data });
});


//create or post data
canteenratingRouter.post("/canteenratingcreate", async (req, res) => {
    const { dishName, dishRate } = req.body;
    const data = new canteenratingModel({
        dishName,
        dishRate
    });
    await data.save();
    res.send({ success: true, message: "Data saved successfully" });
});


module.exports = {
    canteenratingRouter,
}