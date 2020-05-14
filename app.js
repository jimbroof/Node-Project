const http = require('http')

const express = require('express');

// starting th
const app = express();

const routes = require('./routes')

const server = http.createServer(app)

server.listen(3000);


