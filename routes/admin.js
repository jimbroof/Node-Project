const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router()

const productController = require('../controllers/products');

// /admin/add-product => get
router.get('/add-product',productController.getAddProduct);

// Will only execute on post requests
router.post('/add-product',productController.postProduct)


module.exports = router