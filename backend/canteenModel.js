const mongoose = require("mongoose")

const canteenSchema = mongoose.Schema({
    dishImage: {data: Buffer, contentType: String},
    dishName: {type: String, required: true},
    dishPrice: {type: String, required: true}
})


const canteenModel = mongoose.model("canteenlist",canteenSchema);

module.exports = {
    canteenModel,
}