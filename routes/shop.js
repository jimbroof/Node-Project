const path = require('path')

const express = require('express');

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

// All routes that start with /
router.get('/', (req,res,next)=>{

    console.log(adminData.products);

    // this shares data between users, which mean the data is shared on the node.js server.
    // rarely what we want to do
    res.render('shop')

});

module.exports = router;