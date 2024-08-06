const Prod = require('../models/Prod')


const getAllproducts = async (req, res,) => {
    const products = await Prod.getAll()
      res.send(products);
}

module.exports = {
    getAllproducts
}