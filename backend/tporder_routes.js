const express = require("express");
const tporderRouter = express.Router()
const { tporderModel } = require("./tporderModel");
const multer = require("multer");


tporderRouter.get("/tporder/:dishName", async (req, res) => {
    const { dishName } = req.params;
    const data = await tporderModel.find({ dishName });
    res.json({ success: true, data: data });
});


//create or post data
tporderRouter.post("/tpordercreate", async (req, res) => {
    const { dishName, dishPrice, totalPrice } = req.body;
    const data = new tporderModel({
        dishName,
        dishPrice,
        totalPrice
    });
    await data.save();
    res.send({ success: true, message: "Data saved successfully" });
});


module.exports = {
    tporderRouter,
}