const http = require('http')

const express = require('express');

// starting th
const app = express();

const server = http.createServer(app)


// All routes that start with /
app.use('/', (req,res,next)=>{
    console.log('This always runs')
    next()
})

// All routes that start with /
app.use('/products', (req,res,next)=>{
    console.log('This runs on /products')
    res.send('<h1>This is the Product page</h1>')
})

// All routes that start with /
app.use('/', (req,res,next)=>{
    console.log('this runs on /')
    res.send('<h1>Hello from express</h1>')
})




app.listen(3000);

//easy server

