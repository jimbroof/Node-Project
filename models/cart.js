
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );


module.exports = class Cart{

    static addProduct(id,productPrice){
            // Fetch the previous cart


            fs.readFile(p, (err,data) =>{

            let cart = {products: [], totalPrice: 0}

                if(!err){
                    cart = JSON.parse(data);
                }

           //Analyze the cart => Find existing product

            const existingProductIndex = cart.products.findIndex(prod=>prod.id === id )

            const existingProduct = cart.products[existingProductIndex]

            let updatedProduct;

            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty +1;
                cart.products =[...cart.products];
                cart.products[existingProductIndex] = updatedProduct
            } else {
            updatedProduct = { id:id, qty:1}
            cart.products = [...cart.products,updatedProduct]

        }
            cart.totalPrice = cart.totalPrice+ +productPrice;
            fs.writeFile(p,JSON.stringify(cart), err=>{
                console.log(err)
            })
            // Add new product / increase the quantity
            }
            )
  
        }

     static saveToCart(product,cb){
        cart.push(product)
        cb(product)
    }

    static deleteProduct(id,productPrice){

        fs.readFile(p, (err,fileContent) =>{

            if(err){
                return;
            }

            const updatedCart ={...JSON.parse(fileContent)}
            const productIndex = updatedCart.products.findIndex(prod=> prod.id === id)
            
            if(!productIndex){
                return;
            }
            
            const productQty = this.qty;
            updatedCart.products = updatedCart.products.filter(prod =>
                prod.id != id
            )
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty
            
            fs.writeFile(p,updatedCart, err =>{
                console.log(err)
            })

        }
        )
    };

    static getCart(cb){
        fs.readFile(p,(err,data) =>{

            if(!err){
            const cart = JSON.parse(data)
            cb(cart)
            }else{
                cb([])
            }
        })



    }

}