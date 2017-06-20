'use strict';

var url = require('url');

var Article = require('./ArticleService');

module.exports.findByID = function findByID (req, res, next) {
  Article.findByID(req.swagger.params, res, next);
};
