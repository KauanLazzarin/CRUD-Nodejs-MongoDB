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

//delete product page
server.get('/delete', (req, res) => {
    return res.render('delete.html')
});

server.get('/edit', (req, res) => {
    return res.render('edit.html');
});

// API to return the product list
server.get('/products', controllers.showProducts);

// Register a new product
server.post('/register', controllers.createProduct);

// delete a product
server.post('/delete-product', controllers.deleteProducts);

server.post('/edit-product', controllers.editProduct);

module.exports = server;