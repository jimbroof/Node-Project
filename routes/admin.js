const path = require('path')

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router()

const products =[]

// All routes that start with /
router.get('/add-product', (req,res,next)=>{

    res.render('add-product',{title:'title',path:'/admin/add-product'})


    //res.sendFile(path.join(rootDir,'views','add-product.html'))
   // res.send('<form action="/admin/add-product" method=POST><input type="text" name="title"><button type=submit>Add product</button></input></form>')
});

// Will only execute on post requests
router.post('/add-product',(req,res,next)=>{
    // request does not automatically parse the request.
    // must therefore aedd another middleware
    // we have therefore installed npm install --save body-parser

    products.push({title:req.body.title})

    res.redirect('/');
})


exports.routes = router;
exports.products=products;