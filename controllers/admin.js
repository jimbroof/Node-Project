const Product = require('../models/product')


exports.getAddProduct =  (req,res,next)=>{

    res.render('admin/edit-product',
                {
                    pageTitle: 'Add Product',
                    path: '/admin/add-product',
                    editing:false
                }
            )

}

  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    });
  };

  exports.postEditProduct=(req,res,next)=>{
    const prodId = req.body.productId;

    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;

    const updatedProduct = new Product(
        prodId,
        updatedTitle,
        updatedImageUrl,
        updatedDesc,
        updatedPrice)

    updatedProduct.save()
    res.redirect('/')

  }
  

   exports.getEditProduct = (req,res,next) =>{

    const editMode = req.query.edit;

    if(!editMode){
          return res.redirect('/')
    }

    const prodId = req.params.productId;
    Product.findById(prodId, product =>{
                // render data in shop.pug

            if(!product){
                res.redirect('/')
            }
        res.render('admin/edit-product',{
            pageTitle:'Edit products',
            path: '/admin/products',
            editing:true,
            product:product
    })
   });}

exports.postAddProduct = (req,res,next)=>{
    // request does not automatically parse the request.
    // must therefore aedd another middleware
    // we have therefore installed npm install --save body-parser

        const title = req.body.title
        const imageUrl = req.body.imageUrl
        const description = req.body.description
        const price = req.body.price

        const product = new Product(null,title,imageUrl,description,price)

        product.save()

    res.redirect('/admin/products');
}

exports.editProduct = (req,res,next)=>{
    // request does not automatically parse the request.
    // must therefore aedd another middleware
    // we have therefore installed npm install --save body-parser

        const title = req.body.title
        const imageUrl = req.body.imageUrl
        const description = req.body.description
        const price = req.body.price

        const product = new Product(title,imageUrl,description,price)

        product.save()

    res.redirect('/');
}


exports.postDeleteProduct = (req,res,next) =>{

    const id = req.body.productId;

    Product.deleteById(id)


    res.redirect('/admin/products')


    
}






