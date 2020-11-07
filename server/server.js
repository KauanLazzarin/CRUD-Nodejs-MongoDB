const express = require('express');
const server = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb://localhost:27017/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors());
server.use('/public', express.static('public'));
server.use(express.json());
server.use(bodyParser.urlencoded({extended: true}))
server.use(routes);

server.listen(3333, console.log('servidor rodando na porta 3003'));