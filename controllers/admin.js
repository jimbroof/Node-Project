const Product = require('../models/product')


exports.getAddProduct =  (req,res,next)=>{

    res.render('admin/add-product',
                {
                    pageTitle: 'Add Product',
                    path: '/admin/add-product',
                    formsCSS: true,
                    productCSS: true,
                    activeAddProduct: true
                }
            )

    //res.sendFile(path.join(rootDir,'views','add-product.html'))
   // res.send('<form action="/admin/add-product" method=POST><input type="text" name="title"><button type=submit>Add product</button></input></form>')
};

exports.getProduct = (req,res,next) =>{

    Product.fetchAll(products =>{
        // render data in shop.pug
   res.render('admin/products',{
       prods:products,
       pageTitle:'Admin products',
       path: '/admin/products'
   })
   });}

exports.postProduct = (req,res,next)=>{
    // request does not automatically parse the request.
    // must therefore aedd another middleware
    // we have therefore installed npm install --save body-parser
        const product = new Product(req.body.title)
        product.save()

    res.redirect('/');
}

