const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const shopController = require('../controllers/shop')

const router = express.Router()

router.get('/products',shopController.getProducts);

// All routes that start with /
router.get('/cart',shopController.getCart);

router.post('/cart',shopController.postCart);

router.post('/cart/delete/item',shopController.deleteitemFromCart)


router.get('/checkout',shopController.getCheckout);

router.get('/orders',shopController.getOrders);

//: is a query param
router.get('/products/:productId',shopController.getProduct)

// All routes that start with /
router.get('/',shopController.getIndex);


module.exports = router;