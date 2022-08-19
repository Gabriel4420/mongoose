const express = require('express')

const router = express.Router()

const PC = require('../../controllers/ProductController')

router.get('/', PC.showProducts)

router.get('/products/createProduct', PC.createProduct)

router.post('/products/saveProduct', PC.saveProduct)

router.get('/products/:id', PC.getProduct)

router.get('/products/edit/:id', PC.editProduct)

router.post('/products/update/:id', PC.updateProduct)

router.post('/products/:id', PC.removeProduct)
/*  


 */
module.exports = router
