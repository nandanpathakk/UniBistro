const mongoose = require("mongoose")

const messratingSchema = mongoose.Schema({
    dishName: {type: String},
    dishRate: {type: String}
})


const messratingModel = mongoose.model("messrating",messratingSchema);

module.exports = {
    messratingModel,
}