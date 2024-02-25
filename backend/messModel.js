const mongoose = require("mongoose")

const messSchema = mongoose.Schema({
    dishImage: {data: Buffer, contentType: String},
    dishName: {type: String, required: true},
    dishPrice: {type: String, required: true}
})


const messModel = mongoose.model("messlist",messSchema);

module.exports = {
    messModel,
}