'use strict';

var url = require('url');

var Cart = require('./CartService');

module.exports.createCart = function createCart (req, res, next) {
  Cart.createCart(req.swagger.params, res, next);
};

module.exports.deleteAll = function deleteAll (req, res, next) {
  Cart.deleteAll(req.swagger.params, res, next);
};

module.exports.deleteCartItemByID = function deleteCartItemByID (req, res, next) {
  Cart.deleteCartItemByID(req.swagger.params, res, next);
};

module.exports.findAll = function findAll (req, res, next) {
  Cart.findAll(req.swagger.params, res, next);
};

module.exports.getCartItemByID = function getCartItemByID (req, res, next) {
  Cart.getCartItemByID(req.swagger.params, res, next);
};

module.exports.updateCartItemByID = function updateCartItemByID (req, res, next) {
  Cart.updateCartItemByID(req.swagger.params, res, next);
};
