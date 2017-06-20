'use strict';

var url = require('url');

var Order = require('./OrderService');

module.exports.deleteOrder = function deleteOrder (req, res, next) {
  Order.deleteOrder(req.swagger.params, res, next);
};

module.exports.findOrderByActivityId = function findOrderByActivityId (req, res, next) {
  Order.findOrderByActivityId(req.swagger.params, res, next);
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  Order.getOrderById(req.swagger.params, res, next);
};

module.exports.placeOrder = function placeOrder (req, res, next) {
  Order.placeOrder(req.swagger.params, res, next);
};

module.exports.searchOrder = function searchOrder (req, res, next) {
  Order.searchOrder(req.swagger.params, res, next);
};
