const mongoose = require("mongoose")

const dishlistSchema = mongoose.Schema({
    dishImage: {data: Buffer, contentType: String},
    dishName: {type: String, required: true},
    dishPrice: {type: String, required: true}
})


const dishlistModel = mongoose.model("dishlist",dishlistSchema);

module.exports = {
    dishlistModel,
}