const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router()

const adminController = require('../controllers/admin');

// /admin/add-product => get
router.get('/add-product',adminController.getAddProduct);

// /admin/add-product --> GET
router.get('/products',adminController.getProduct);

// /admin/add-product --> GET
router.get('/products',adminController.getProduct);

// Will only execute on post requests
router.get('edit-product', adminController.editProduct)


module.exports = router