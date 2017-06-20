'use strict';

var url = require('url');

var Payment = require('./PaymentService');

module.exports.createPayment = function createPayment (req, res, next) {
  Payment.createPayment(req.swagger.params, res, next);
};
