const path = require('path')

const express = require('express');

const bodyparser = require('body-parser')

const rootDir = require('./util/path')

// starting th
const app = express();

app.set('view engine','pug');
app.set('views','views')

app.get('/thestart', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

router = express.Router()

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// registeres a middleware to enable bodyparsing
app.use(bodyparser.urlencoded({ extended: true }));

//registerings the public folder as a static folder top access the css files
app.use(express.static(path.join(rootDir,'public')))

// only routes that starts with admin will go into admin routes
app.use('/admin',adminData.routes)
// only routes that starts with shop will go into admin routes
app.use(shopRoutes)

app.use((req,res,next)=>{

    res.status(404).sendFile(path.join(rootDir,'views','/404.html'))

   // res.send('<form action="/admin/add-product" method=POST><input type="text" name="title"><button type=submit>Add product</button></input></form>')
});

app.listen(3000);

//easy server

