var express = require('express');
var router = express.Router()
const productsController = require('../controllers/productsController')

/* GET users listing. */
router.get('/', productsController.getAllproducts)
router.post('/', productsController.createProducts)
module.exports = router;
