const { products } = require('../models');
// const db = require('../models/index')

const getAllproducts = async (req, res) => {
        const allProducts = await products.findAll();
        res.json(allProducts);
}

const getOne = async (req, res) => {
    const productId =  parseInt(req.params.id)
    const product = await products.findByPk(productId)
    res.json(product)
}

const createProducts = async (req, res) => {
    const {productName, category, price} = await req.body
    const createProd = await products.create({productName, category, price});
    res.json(createProd); 
}

const deleteOne = async (req, res) => {
    const deleteProdId = parseInt(req.params.id)
    const deleteProduct = await products.destroy({
        where: {id : deleteProdId}
    })
    res.json({message: "usuario deletado com sucesso"})
}


module.exports = { 
    getAllproducts,
    createProducts,
    getOne,
    deleteOne
}