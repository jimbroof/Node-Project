const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router()

const productController = require('../controllers/shop');

const adminController = require('../controllers/admin');


// /admin/add-product => get
router.get('/add-product',adminController.getAddProduct);

// /admin/add-product --> GET
router.get('/products',adminController.getProduct);

// Will only execute on post requests
router.post('/add-product',adminController.postProduct)


module.exports = router