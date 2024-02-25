const express = require("express");
const canteenorderRouter = express.Router()
const { canteenorderModel } = require("./canteenorderModel");
const multer = require("multer");


canteenorderRouter.get("/canteenorder/:dishName", async (req, res) => {
    const { dishName } = req.params;
    const data = await canteenorderModel.find({ dishName });
    res.json({ success: true, data: data });
});


//create or post data
canteenorderRouter.post("/canteenordercreate", async (req, res) => {
    const { dishName, dishPrice, totalPrice } = req.body;
    const data = new canteenorderModel({
        dishName,
        dishPrice,
        totalPrice
    });
    await data.save();
    res.send({ success: true, message: "Data saved successfully" });
});


module.exports = {
    canteenorderRouter,
}