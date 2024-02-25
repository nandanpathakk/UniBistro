const mongoose = require("mongoose")

const canteenratingSchema = mongoose.Schema({
    dishName: {type: String},
    dishRate: {type: String}
})


const canteenratingModel = mongoose.model("canteenrating",canteenratingSchema);

module.exports = {
    canteenratingModel,
}