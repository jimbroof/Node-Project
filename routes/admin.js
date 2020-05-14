const express = require('express');

const router = express.Router()

// All routes that start with /
router.get('/add-product', (req,res,next)=>{
    res.send('<form action="/admin/add-product" method=POST><input type="text" name="title"><button type=submit>Add product</button></input></form>')
});

// Will only execute on post requests
router.post('/add-product',(req,res,next)=>{
    // request does not automatically parse the request.
    // must therefore aedd another middleware
    // we have therefore installed npm install --save body-parser
    console.log(req.body)

    res.redirect('/');
})

module.exports = router;