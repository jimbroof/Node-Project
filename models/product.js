
const fs = require('fs');
const path = require('path');

const Cart = require('./cart')


const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

const getProductsFromFile = (cb) =>{
  
      fs.readFile(p, (err, fileContent) => {
        if (err) {
          return cb([]);
        }
        return cb(JSON.parse(fileContent));
      });
}

module.exports = class Product{

    constructor(id,title, imageUrl, description, price){
        this.id = id;
        this.title= title;
        this.imageUrl= imageUrl;
        this.description= description;
        this.price= price;
    }

    save() {


        getProductsFromFile(products =>{

          // check if Id exist
          // If it does replace the product at existingProduct index with 
          // this product
          if(this.id){
            const existingProductIndex = products.findIndex(
              prod=>prod.id===this.id
              )
            const updatedProducts = [...products]
            updatedProducts[existingProductIndex] = this

            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
              console.log(err);
            });
          
          } else{

          // create a new product
           this.id = Math.random().toString();

            products.push(this);

            fs.writeFile(p, JSON.stringify(products), err => {
              console.log(err);
            });
          }
        });
      }
 static fetchAll(cb) {
    getProductsFromFile(cb)
  }

static findById(id,cb){
  getProductsFromFile(products =>{
      const product =  products.find(p => p.id === id )
      cb(product)
  })

}

static deleteById(id){

    getProductsFromFile(products=>{


      const existingProductIndex = products.findIndex(product =>
        product.id === id
      )


      if(existingProductIndex > -1){

        let next = existingProductIndex + 1

        const prodToForward = products.filter( product => 
            product.id = id
          );

         products.splice(existingProductIndex,next)

         fs.writeFile(p,JSON.stringify(products), err =>{
           if(!err){
             Cart.deleteProduct(id,prodToForward.price)
           }
         })  
      } else{
        console.log("the id is not present")
      }



    })


}

}