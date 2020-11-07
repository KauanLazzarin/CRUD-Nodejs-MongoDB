const mongoose = require('mongoose');
const models = require('./../model/product.js');
const manipulates = require('./../views/products.js');

const Product = mongoose.model('Product');

async function createProduct (req, res) {
    try {
        await Product.create(req.body);
        console.log('Produto registrado com sucesso! dados:', req.body);
        return res.redirect('/');
    } catch (error) {
        console.error(error);
    };
};

async function showProducts (req, res) {
    try {
        const products = await Product.find();

        const manipulatedData = await manipulates.getDataAtribbutes(products);

        return res.render('products.html', {manipulatedData});
    } catch (error) {
        console.error(error);
    }
};

async function deleteProducts (req, res) {
    try {
        const {productId} = req.body;
        
        await Product.findByIdAndDelete(productId);

        return res.redirect('/products');
    } catch (error) {
        console.error(error);
    }
}

async function editProduct (req, res) {
    try {
        const {productId, name, mark, price} = req.body;

        const actualData = await Product.findById(productId);
     
        const editedData = {
            name: name || actualData.name,
            mark: mark || actualData.mark,
            price: price || actualData.price
        };

        await Product.findByIdAndUpdate(productId, editedData);

        return res.redirect('/products');
    } catch (error) {
        
    }
};

module.exports = {
    createProduct,
    showProducts,
    deleteProducts,
    editProduct
};