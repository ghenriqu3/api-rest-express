const { products } = require('../models');
// const db = require('../models/index')

const getAllproducts = async (req, res,) => {
        const allProducts = await products.findAll();
        res.json(allProducts);
}

module.exports = { 
    getAllproducts
}