const mongoose = require("mongoose")

const tporderSchema = mongoose.Schema({
    dishName: {type: String, required: true},
    dishPrice: {type: String, required: true},
    totalPrice: {type: String, required: true}
})


const tporderModel = mongoose.model("tporder",tporderSchema);

module.exports = {
    tporderModel,
}