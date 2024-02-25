const express = require("express");
const messorderRouter = express.Router()
const { messorderModel } = require("./messorderModel");
const multer = require("multer");


messorderRouter.get("/messorder/:dishName", async (req, res) => {
    const { dishName } = req.params;
    const data = await messorderModel.find({ dishName });
    res.json({ success: true, data: data });
});


//create or post data
messorderRouter.post("/messordercreate", async (req, res) => {
    const { dishName, dishPrice, totalPrice } = req.body;
    const data = new messorderModel({
        dishName,
        dishPrice,
        totalPrice
    });
    await data.save();
    res.send({ success: true, message: "Data saved successfully" });
});


module.exports = {
    messorderRouter,
}