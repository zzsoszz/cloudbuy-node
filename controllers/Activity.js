'use strict';

var url = require('url');

var Activity = require('./ActivityService');

module.exports.activitySearch = function activitySearch (req, res, next) {
  Activity.activitySearch(req.swagger.params, res, next);
};

module.exports.createActivity = function createActivity (req, res, next) {
  Activity.createActivity(req.swagger.params, res, next);
};

module.exports.findActivityByID = function findActivityByID (req, res, next) {
  Activity.findActivityByID(req.swagger.params, res, next);
};

module.exports.findAllActivityByProductId = function findAllActivityByProductId (req, res, next) {
  Activity.findAllActivityByProductId(req.swagger.params, res, next);
};

module.exports.findCurrentActivityByProductId = function findCurrentActivityByProductId (req, res, next) {
  Activity.findCurrentActivityByProductId(req.swagger.params, res, next);
};
