const mongoose = require("mongoose")

const tpSchema = mongoose.Schema({
    dishImage: {data: Buffer, contentType: String},
    dishName: {type: String, required: true},
    dishPrice: {type: String, required: true}
})


const tpModel = mongoose.model("tplist",tpSchema);

module.exports = {
    tpModel,
}