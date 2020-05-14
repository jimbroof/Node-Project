const http = require('http')

const express = require('express');

// starting th
const app = express();

const server = http.createServer(app)

// This funciton will be executed for every incoming request
// Must call next for the next app.use to be called

app.use((req,res,next)=>{
    console.log('in the middleware')
    next()

})

app.use((req,res,next)=>{
    console.log('another middleware')

})

server.listen(3000);

//easy server

