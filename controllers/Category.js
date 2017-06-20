'use strict';

var url = require('url');

var Category = require('./CategoryService');

module.exports.createCategory = function createCategory (req, res, next) {
  Category.createCategory(req.swagger.params, res, next);
};

module.exports.deleteAllCategory = function deleteAllCategory (req, res, next) {
  Category.deleteAllCategory(req.swagger.params, res, next);
};

module.exports.findCategorys = function findCategorys (req, res, next) {
  Category.findCategorys(req.swagger.params, res, next);
};
