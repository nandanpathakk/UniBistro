const express = require("express");
const tpRouter = express.Router()
const { tpModel } = require("./tpModel");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null, "./tpuploads")
    },
    filename: function (req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

//for reading data
tpRouter.get("/tp",async(req, res) => {
    const data = await tpModel.find({})
    res.json({success: true, data: data})
});

//create or post data
tpRouter.post("/tpcreate",upload.single("dishImage"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const data = new tpModel({
        dishImage: {
            data: req.file?.filename,
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

tpRouter.delete("/tp/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // Find the dish entry by its ID and delete it
        const deletedData = await tpModel.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ success: false, message: "Data not found" });
        }
        res.status(200).json({ success: true, message: "Data deleted successfully", data: deletedData });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

tpRouter.delete("/tp", async (req, res) => {
    try {
        // Delete all entries from the database
        await tpModel.deleteMany({});
        res.status(200).json({ success: true, message: "All data deleted successfully" });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


module.exports = {
    tpRouter,
}