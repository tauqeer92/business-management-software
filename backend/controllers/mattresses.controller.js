const Mattress = require("../models/mattress.model");
const {getAllMattresses, createMattress} = require("../service/mattresses.service");


const MattressController = {
    Index: async (req, res) => {
        const mattresses = await getAllMattresses()
        res.json({mattresses})
    },

    Create: async (req, res) => {
        const mattress_data = {name: req.body.name, size: req.body.size, type: req.body.type, 
            cost: req.body.cost, price: req.body.price, description: req.body.description}
        const mattress = await createMattress(mattress_data)
        res.json({mattress_data})
    }
}
module.exports = MattressController