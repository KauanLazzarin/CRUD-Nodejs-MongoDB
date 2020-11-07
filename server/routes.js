const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const controllers = require('./database/controller/product-controller.js');

nunjucks.configure('pages', {
    autoescape: true,
    express: server
});

// landing page
server.get('/', (req, res) => {
    return res.render('index.html');
});

// API to return the product list
server.get('/products', controllers.showProducts);

// Register a new product
server.post('/register', controllers.createProduct);

module.exports = server