const Product = require('../models/product')
const Cart = require('../models/cart') 



exports.getProducts = (req,res,next) =>{

    Product.fetchAll().then(([rows,fieldData])=>{
        res.render('shop/product-list',{
            prods:rows,
            pageTitle:'All products',
            path: '/products'
        })
    }).catch(err => console.log('This is new'))
}



exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId;

    Product.findById(prodId, product =>{
        res.render('shop/product-detail',
        {
            product:product,
            pageTitle:'product details',
            path:'shop/product-detail'
        })
    });
    
}

exports.getIndex = (req,res,next)=>{

    Product.fetchAll().then(([rows,fieldData])=>{
        
        res.render('shop/index',{
            prods:rows,
            pageTitle:'Detailed Products',
            path: '/'
        })
    }).catch()
 }

 exports.getCart = (req,res,next)=>{

    Cart.getCart(cart=>{
        
        Product.fetchAll(products=>{
            const cartProducts = []
            for(product of products){
                const cartProductData = cart.products.find(prod=>prod.id === product.id)
                if(cartProductData){
                    cartProducts.push({productData: product, qty:cartProductData.qty});
                }
            }

            res.render('shop/cart',{
                path:'/cart',
                pageTitle:'Your Cart',
                products:cartProducts
            });
        })


       
    });
 }

 exports.postCart = (req,res,next)=>{
    const productId = req.body.productId;

    
   Product.findById(productId, (product) =>{
        Cart.addProduct(productId,product.price);
    })
    res.redirect('/cart')

 };

 exports.deleteitemFromCart = (req,res,next) =>{

    const prodId = req.boy.productId

    Product.findById( prodId, product=> {
        Cart.deleteProduct(prodId, product.price)
        res.redirect('/cart')
    })
 }


 exports.getOrders = (req,res,next)=>{

    Product.fetchAll(products =>{
          // render data in shop.pug
     res.render('shop/orders',{
         prods:products,
         pageTitle:'Your orders',
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