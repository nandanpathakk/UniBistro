const mongoose = require("mongoose")

const tpratingSchema = mongoose.Schema({
    dishName: {type: String},
    dishRate: {type: String}
})


const tpratingModel = mongoose.model("tprating",tpratingSchema);

module.exports = {
    tpratingModel,
}