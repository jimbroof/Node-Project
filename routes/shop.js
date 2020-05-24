const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const shopController = require('../controllers/shop')

const router = express.Router()

router.get('/products',shopController.getProducts);

// All routes that start with /
router.get('/cart',shopController.getCart);

router.get('/checkout',shopController.getCheckout);


// All routes that start with /
router.get('/',shopController.getIndex);


module.exports = router;