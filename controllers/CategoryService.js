'use strict';

exports.createCategory = function(args, res, next) {
  /**
   * 创建分类
   * 创建分类
   *
   * body Body_6 分类对象 (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : 123456789
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteAllCategory = function(args, res, next) {
  /**
   * 删除所有分类
   * 删除所有分类
   *
   * body Body_7 删除所有分类 (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.findCategorys = function(args, res, next) {
  /**
   * 查询所有分类
   * 查询所有分类
   *
   * returns inline_response_200_5
   **/
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
  "data" : [ {
    "name" : "aeiou",
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

