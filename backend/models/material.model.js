const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const materialSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String },
	mattresses: [{
		type: Schema.Types.ObjectId,
		ref: "Mattress"
	}]
});

module.exports = mongoose.model("Material", materialSchema);
