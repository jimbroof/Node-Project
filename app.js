const express = require('express');

const bodyparser = require('body-parser')

// starting th
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// registeres a middleware to enable bodyparsing
app.use(bodyparser.urlencoded({ extended: true }));

// only routes that starts with admin will go into admin routes
app.use('/admin',adminRoutes)
// only routes that starts with shop will go into admin routes
app.use('/shop',shopRoutes)

app.use((req,res,next) =>{
    res.status(404).send('<h1>404 page not found</h1>')
})

app.listen(3000);

//easy server

