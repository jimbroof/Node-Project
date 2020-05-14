const http = require('http')

const express = require('express');

const bodyparser = require('body-parser')

// starting th
const app = express();

// registeres a middleware to enable bodyparsing
app.use(bodyparser.urlencoded({ extended: true }));


// All routes that start with /
app.use('/', (req,res,next)=>{
    next()
})

// All routes that start with /
app.use('/add-products', (req,res,next)=>{
    res.send('<form action="/product" method=POST><input type="text" name="title"><button type=submit>Add product</button></input></form>')
});

// Will only execute on post requests
app.post('/product',(req,res,next)=>{
    // request does not automatically parse the request.
    // must therefore aedd another middleware
    // we have therefore installed npm install --save body-parser
    console.log(req.body)

    res.redirect('/');

})

// All routes that start with /
app.use('/', (req,res,next)=>{
    res.send('<h1>Hello from express</h1>')
})

app.listen(3000);

//easy server

