'use strict';
var knex=require("../db/connect.js");
// var JSONStream = require('JSONStream');

exports.activitySearch = function(args, res, next) {
  /**
   * search activity
   * 搜索活动
   *
   * filter String 过滤条件  lastName:qingtian,age>25
   * offset Integer 起始索引 (optional)
   * limit Integer 每页条数 (optional)
   * sort String 排序字段 字段名1:DESC,字段名2:ASC (optional)
   * keyword String 搜索关键词 (optional)
   * returns inline_response_200_4
   **/
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
  "data" : [ {
    "winuser" : {
      "userStatus" : 123,
      "address" : "aeiou",
      "level" : "aeiou",
      "avatarUrl" : "aeiou",
      "nickName" : "aeiou",
      "sex" : "aeiou",
      "token" : "aeiou",
      "realName" : "aeiou",
      "password" : "aeiou",
      "phone" : "aeiou",
      "loginName" : "aeiou",
      "id" : 123456789,
      "email" : "aeiou"
    },
    "winNumber" : "aeiou",
    "avaliable" : 123,
    "id" : 123456789,
    "beginTime" : "2000-01-23T04:56:07.000+00:00",
    "endTime" : "2000-01-23T04:56:07.000+00:00",
    "activityNumber" : "aeiou",
    "status" : "aeiou"
  } ]
};


  if (Object.keys(examples).length > 0) {
    console.log(args.limit.value);
    knex.select().from('users')
    .stream().on("data",function(data){
       console.log("aaaaaa:",data);
    });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }

  
}

exports.createActivity = function(args, res, next) {
  /**
   * create new Activity
   * 创建活动
   *
   * body Body_5 活动对象 (optional)
   * returns products_currentActivity
   **/
  var examples = {};
  examples['application/json'] = {
  "winuser" : {
    "userStatus" : 123,
    "address" : "aeiou",
    "level" : "aeiou",
    "avatarUrl" : "aeiou",
    "nickName" : "aeiou",
    "sex" : "aeiou",
    "token" : "aeiou",
    "realName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "loginName" : "aeiou",
    "id" : 123456789,
    "email" : "aeiou"
  },
  "winNumber" : "aeiou",
  "avaliable" : 123,
  "id" : 123456789,
  "beginTime" : "2000-01-23T04:56:07.000+00:00",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityNumber" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findActivityByID = function(args, res, next) {
  /**
   * 活动详情
   * 根据活动ID获取活动详情
   *
   * id String 活动ID
   * returns products_currentActivity
   **/
  var examples = {};
  examples['application/json'] = {
  "winuser" : {
    "userStatus" : 123,
    "address" : "aeiou",
    "level" : "aeiou",
    "avatarUrl" : "aeiou",
    "nickName" : "aeiou",
    "sex" : "aeiou",
    "token" : "aeiou",
    "realName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "loginName" : "aeiou",
    "id" : 123456789,
    "email" : "aeiou"
  },
  "winNumber" : "aeiou",
  "avaliable" : 123,
  "id" : 123456789,
  "beginTime" : "2000-01-23T04:56:07.000+00:00",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityNumber" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findAllActivityByProductId = function(args, res, next) {
  /**
   * 历史活动列表
   * 根据产品ID获得所有活动
   *
   * productId String 商品ID
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "winuser" : {
    "userStatus" : 123,
    "address" : "aeiou",
    "level" : "aeiou",
    "avatarUrl" : "aeiou",
    "nickName" : "aeiou",
    "sex" : "aeiou",
    "token" : "aeiou",
    "realName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "loginName" : "aeiou",
    "id" : 123456789,
    "email" : "aeiou"
  },
  "winNumber" : "aeiou",
  "avaliable" : 123,
  "id" : 123456789,
  "beginTime" : "2000-01-23T04:56:07.000+00:00",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityNumber" : "aeiou",
  "status" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.findCurrentActivityByProductId = function(args, res, next) {
  /**
   * 活动详情
   * 根据产品ID获取当前活动详情
   *
   * productId String 产品ID
   * returns products_currentActivity
   **/
  var examples = {};
  examples['application/json'] = {
  "winuser" : {
    "userStatus" : 123,
    "address" : "aeiou",
    "level" : "aeiou",
    "avatarUrl" : "aeiou",
    "nickName" : "aeiou",
    "sex" : "aeiou",
    "token" : "aeiou",
    "realName" : "aeiou",
    "password" : "aeiou",
    "phone" : "aeiou",
    "loginName" : "aeiou",
    "id" : 123456789,
    "email" : "aeiou"
  },
  "winNumber" : "aeiou",
  "avaliable" : 123,
  "id" : 123456789,
  "beginTime" : "2000-01-23T04:56:07.000+00:00",
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "activityNumber" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

