const mongoose = require("mongoose")

const messorderSchema = mongoose.Schema({
    dishName: {type: String, required: true},
    dishPrice: {type: String, required: true},
    totalPrice: {type: String, required: true}
})


const messorderModel = mongoose.model("messorder",messorderSchema);

module.exports = {
    messorderModel,
}