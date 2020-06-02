const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router()

const adminController = require('../controllers/admin');

// /admin/add-product => get
router.get('/add-product',adminController.getAddProduct);

// /admin/add-product --> GET
router.get('/products',adminController.getProducts);

router.post('/add-product',adminController.postAddProduct);

// Will only execute on post requests
router.get('/edit-product', adminController.editProduct)

router.get('/edit-product/:productId',adminController.getEditProduct)

router.post('/edit-product',adminController.postEditProduct);

router.post('/delete-product/:productId',adminController.postDeleteProduct);


module.exports = router