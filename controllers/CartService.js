'use strict';

exports.createCart = function(args, res, next) {
  /**
   * 创建购物车
   * 创建购物车
   *
   * token String token
   * body Body_8 Created Cart object (optional)
   * returns inline_response_200_6_data
   **/
  var examples = {};
  examples['application/json'] = {
  "activityId" : 123456789,
  "count" : 123456789,
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteAll = function(args, res, next) {
  /**
   * 删除购物车所有项目
   * 删除购物车所有项目
   *
   * token String token
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteCartItemByID = function(args, res, next) {
  /**
   * 删除购物车项
   * 
   *
   * token String token
   * cartId Long 购物车项ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.findAll = function(args, res, next) {
  /**
   * 查询购物车列表
   * 查询购物车列表
   *
   * token String token
   * returns inline_response_200_6
   **/
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
  "data" : [ {
    "activityId" : 123456789,
    "count" : 123456789,
    "id" : 123456789
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getCartItemByID = function(args, res, next) {
  /**
   * 根据ID查询购物车项
   * 根据ID查询购物车项
   *
   * token String token
   * cartId Long 购物车项ID
   * returns inline_response_200_6_data
   **/
  var examples = {};
  examples['application/json'] = {
  "activityId" : 123456789,
  "count" : 123456789,
  "id" : 123456789
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateCartItemByID = function(args, res, next) {
  /**
   * 更新购物车项
   * 
   *
   * token String token
   * cartId Long 购物车项ID
   * body Body_9 新购物车项 (optional)
   * no response value expected for this operation
   **/
  res.end();
}

