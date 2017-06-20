'use strict';

var url = require('url');

var Product = require('./ProductService');

module.exports.addProduct = function addProduct (req, res, next) {
  Product.addProduct(req.swagger.params, res, next);
};

module.exports.deleteProduct = function deleteProduct (req, res, next) {
  Product.deleteProduct(req.swagger.params, res, next);
};

module.exports.findProductsByStatus = function findProductsByStatus (req, res, next) {
  Product.findProductsByStatus(req.swagger.params, res, next);
};

module.exports.getProductsById = function getProductsById (req, res, next) {
  Product.getProductsById(req.swagger.params, res, next);
};

module.exports.productSearch = function productSearch (req, res, next) {
  Product.productSearch(req.swagger.params, res, next);
};

module.exports.updateProduct = function updateProduct (req, res, next) {
  Product.updateProduct(req.swagger.params, res, next);
};

module.exports.updateProductWithForm = function updateProductWithForm (req, res, next) {
  Product.updateProductWithForm(req.swagger.params, res, next);
};
