'use strict';

exports.deleteOrder = function(args, res, next) {
  /**
   * 删除订单
   * 删除订单
   *
   * orderId String 被删除订单的ID
   * no response value expected for this operation
   **/
  res.end();
}

exports.findOrderByActivityId = function(args, res, next) {
  /**
   * 根据活动ID查所有订单
   * 根据活动ID查所有订单
   *
   * activityId String 活动ID
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
  "data" : [ {
    "result" : [ {
      "activityId" : 123456789,
      "ticketNumber" : "aeiou",
      "activityNumber" : "aeiou"
    } ],
    "createBy" : {
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
    "totalPrice" : 123456789,
    "orderActivity" : [ {
      "activityId" : 123456789,
      "count" : 123456789
    } ],
    "id" : 123456789,
    "complete" : true,
    "status" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getOrderById = function(args, res, next) {
  /**
   * 查询订单
   * 根据订单ID查询订单
   *
   * token String token
   * orderId String 订单ID
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : [ {
    "activityId" : 123456789,
    "ticketNumber" : "aeiou",
    "activityNumber" : "aeiou"
  } ],
  "createBy" : {
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
  "totalPrice" : 123456789,
  "orderActivity" : [ {
    "activityId" : 123456789,
    "count" : 123456789
  } ],
  "id" : 123456789,
  "complete" : true,
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.placeOrder = function(args, res, next) {
  /**
   * 创建订单
   * 
   *
   * token String token
   * body Body_2 订单 (optional)
   * returns inline_response_200_2
   **/
  var examples = {};
  examples['application/json'] = {
  "result" : [ {
    "activityId" : 123456789,
    "ticketNumber" : "aeiou",
    "activityNumber" : "aeiou"
  } ],
  "createBy" : {
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
  "totalPrice" : 123456789,
  "orderActivity" : [ {
    "activityId" : 123456789,
    "count" : 123456789
  } ],
  "id" : 123456789,
  "complete" : true,
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.searchOrder = function(args, res, next) {
  /**
   * 订单搜索
   * 订单搜索
   *
   * filter String 过滤条件  lastName:qingtian,age>25
   * offset Integer 起始索引 (optional)
   * limit Integer 每页条数 (optional)
   * sort String 排序字段 字段名1:DESC,字段名2:ASC (optional)
   * keyword String 搜索关键词 (optional)
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
  "data" : [ {
    "result" : [ {
      "activityId" : 123456789,
      "ticketNumber" : "aeiou",
      "activityNumber" : "aeiou"
    } ],
    "createBy" : {
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
    "totalPrice" : 123456789,
    "orderActivity" : [ {
      "activityId" : 123456789,
      "count" : 123456789
    } ],
    "id" : 123456789,
    "complete" : true,
    "status" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

