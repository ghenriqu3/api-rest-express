const { Products } = require('../models/');
// const db = require('../models/index')

const getAllproducts = async (req, res,) => {
        const allProducts = await Products.findAll();
        res.json(allProducts);
}

module.exports = { 
    getAllproducts
}