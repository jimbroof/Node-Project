
const Cart = require('./cart')

const db = require('../util/database')


module.exports = class Product{

    constructor(id,title, imageUrl, description, price){
        this.id = id;
        this.title= title;
        this.imageUrl= imageUrl;
        this.description= description;
        this.price= price;
    }

    save() {
      // (? ? ? ?), [] is used by the mysql2 to add data and then remove them 
      return db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES(?, ?, ?, ?)',
      [this.title,this.price,this.imageUrl,this.description])
      }
 static fetchAll() {

  // returns the promise
  return db.execute('SELECT * from products');
  }

static findById(id,cb){
    cb([])
}

static deleteById(id){


}

}