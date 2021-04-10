const express = require('express');
const router = express.Router()
const {readProduct, insertProduct, updateProduct, deleteProduct, readProduct2} = require('../controller/product.controller')


router.get ('/', readProduct)
router.get ('/:id_product', readProduct2)
router.post('/',insertProduct)
router.put('/:id_product',updateProduct)
router.delete('/:id_product',deleteProduct)
module.exports = router