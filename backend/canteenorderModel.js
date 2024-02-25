const mongoose = require("mongoose")

const canteenorderSchema = mongoose.Schema({
    dishName: {type: String, required: true},
    dishPrice: {type: String, required: true},
    totalPrice: {type: String, required: true}
})


const canteenorderModel = mongoose.model("canteenorder",canteenorderSchema);

module.exports = {
    canteenorderModel,
}