const Api = require('../mock-api')

module.exports = {
    getAll: async() => {
        const allProducts = Api
        console.log(allProducts)
        return allProducts
    }
}