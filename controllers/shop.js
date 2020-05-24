const Product = require('../models/product')


exports.getProducts = (req,res,next)=>{

   Product.fetchAll(products =>{
         // render data in shop.pug
    res.render('shop/product-list',{
        prods:products,
        pageTitle:'All products',
        path: '/products'
    })
    });
}

exports.getIndex = (req,res,next)=>{

    Product.fetchAll(products =>{
          // render data in shop.pug
     res.render('shop/index',{
         prods:products,
         pageTitle:'Detailed Products',
         path: '/'
     })
     });
 }

 exports.getCart = (req,res,next)=>{

    Product.fetchAll(products =>{
          // render data in shop.pug
     res.render('shop/cart',{
         prods:products,
         pageTitle:'Your Cart',
         path: '/'
     })
     });
 }

 exports.getCheckout = (req,res,next) =>{
    res.render('/shop/checkout',{
        prods:products,
        pageTitle:'Checkout',
        path: '/checkout'
    })

 }