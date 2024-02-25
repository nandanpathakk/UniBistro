const express = require("express");
const messRouter = express.Router()
const { messModel } = require("./messModel");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null, "./messuploads")
    },
    filename: function (req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

//for reading data
messRouter.get("/mess",async(req, res) => {
    const data = await messModel.find({})
    res.json({success: true, data: data})
});

//create or post data
messRouter.post("/messcreate",upload.single("dishImage"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const data = new messModel({
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


messRouter.delete("/mess/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // Find the dish entry by its ID and delete it
        const deletedData = await messModel.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ success: false, message: "Data not found" });
        }
        res.status(200).json({ success: true, message: "Data deleted successfully", data: deletedData });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}); 

messRouter.delete("/mess", async (req, res) => {
    try {
        // Delete all entries from the database
        await messModel.deleteMany({});
        res.status(200).json({ success: true, message: "All data deleted successfully" });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});


module.exports = {
    messRouter,
}