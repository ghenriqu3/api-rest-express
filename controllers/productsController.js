const { products } = require('../models');
// const db = require('../models/index')

const getAllproducts = async (req, res) => {
        const allProducts = await products.findAll();
        res.json(allProducts);
}
const createProducts = async (req, res) => {
    const {producName, category, price} = await req.body
    const createProd = await products.create({producName, category, price});

    // console.log(createProd)
    res.json(createProd);
}

module.exports = { 
    getAllproducts,
    createProducts
}