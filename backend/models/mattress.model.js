const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mattressSchema = new mongoose.Schema({
    name: {type: String},
    size: {type: String},
    type: {type: String},
    cost: {type: Number},
    price: {type: Number},
    description: {type: String},
    materials: [{
		type: Schema.Types.ObjectId,
		ref: "Material"
	}]
});


module.exports = mongoose.model("Mattress", mattressSchema)