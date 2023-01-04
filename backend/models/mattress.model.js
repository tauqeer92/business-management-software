const mongoose = require('mongoose')

const mattressSchema = new mongoose.Schema({
    name: {type: String},
    size: {type: String},
    type: {type: String},
    cost: {type: Number},
    price: {type: Number},
    description: {type: String}
});


module.exports = mongoose.model("Mattress", mattressSchema)