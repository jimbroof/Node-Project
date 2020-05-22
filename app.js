const path = require('path')

const express = require('express');

const bodyparser = require('body-parser')

const rootDir = require('./util/path')

const errorController = require('./controllers/404')

// starting th
const app = express();

app.set('view engine','pug');
app.set('views','views')

router = express.Router()

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// registeres a middleware to enable bodyparsing
app.use(bodyparser.urlencoded({ extended: true }));

//registerings the public folder as a static folder top access the css files
app.use(express.static(path.join(rootDir,'public')))

// only routes that starts with admin will go into admin routes
app.use('/admin',adminRoutes)
// only routes that starts with shop will go into admin routes
app.use(shopRoutes)

app.use(errorController.error404);

app.listen(3000);

//easy server

