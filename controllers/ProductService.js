'use strict';

exports.addProduct = function(args, res, next) {
  /**
   * 添加产品
   * 
   *
   * body Body_1 添加产品
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "limitMax" : 123,
  "photoUrls" : "aeiou",
  "priceType" : "aeiou",
  "largePhotoUrls" : "aeiou",
  "article" : {
    "name" : "aeiou",
    "id" : 123456789,
    "richText" : "aeiou"
  },
  "tags" : [ "aeiou" ],
  "shortIntroduction" : "aeiou",
  "catagory" : {
    "name" : "aeiou",
    "id" : 123456789
  },
  "total" : 123,
  "currentActivity" : {
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
  },
  "limitFlag" : 123,
  "price" : 123456789,
  "name" : "aeiou",
  "id" : 123456789,
  "detailUrl" : "aeiou",
  "introduction" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteProduct = function(args, res, next) {
  /**
   * Deletes a Product
   * 
   *
   * productId Long Product id to delete
   * no response value expected for this operation
   **/
  res.end();
}

exports.findProductsByStatus = function(args, res, next) {
  /**
   * 根据产品状态查询产品
   * 多个状态用逗号分隔
   *
   * status List 状态列表 (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "limitMax" : 123,
  "photoUrls" : "aeiou",
  "priceType" : "aeiou",
  "largePhotoUrls" : "aeiou",
  "article" : {
    "name" : "aeiou",
    "id" : 123456789,
    "richText" : "aeiou"
  },
  "tags" : [ "aeiou" ],
  "shortIntroduction" : "aeiou",
  "catagory" : {
    "name" : "aeiou",
    "id" : 123456789
  },
  "total" : 123,
  "currentActivity" : {
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
  },
  "limitFlag" : 123,
  "price" : 123456789,
  "name" : "aeiou",
  "id" : 123456789,
  "detailUrl" : "aeiou",
  "introduction" : "aeiou",
  "status" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getProductsById = function(args, res, next) {
  /**
   * Find product by ID
   * 根据ID查询产品
   *
   * productId Long 产品ID
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "limitMax" : 123,
  "photoUrls" : "aeiou",
  "priceType" : "aeiou",
  "largePhotoUrls" : "aeiou",
  "article" : {
    "name" : "aeiou",
    "id" : 123456789,
    "richText" : "aeiou"
  },
  "tags" : [ "aeiou" ],
  "shortIntroduction" : "aeiou",
  "catagory" : {
    "name" : "aeiou",
    "id" : 123456789
  },
  "total" : 123,
  "currentActivity" : {
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
  },
  "limitFlag" : 123,
  "price" : 123456789,
  "name" : "aeiou",
  "id" : 123456789,
  "detailUrl" : "aeiou",
  "introduction" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.productSearch = function(args, res, next) {
  /**
   * 商品搜索
   * 商品搜索 filter=categoryId:1,status=1
   *
   * filter String 过滤条件  lastName:qingtian,age>25
   * offset Integer 起始索引 (optional)
   * limit Integer 每页条数 (optional)
   * sort String 排序字段 字段名1:DESC,字段名2:ASC (optional)
   * keyword String 搜索关键词 (optional)
   * returns inline_response_200_1
   **/
  var examples = {};
  examples['application/json'] = {
  "total" : 123456789,
  "data" : [ {
    "limitMax" : 123,
    "photoUrls" : "aeiou",
    "priceType" : "aeiou",
    "largePhotoUrls" : "aeiou",
    "article" : {
      "name" : "aeiou",
      "id" : 123456789,
      "richText" : "aeiou"
    },
    "tags" : [ "aeiou" ],
    "shortIntroduction" : "aeiou",
    "catagory" : {
      "name" : "aeiou",
      "id" : 123456789
    },
    "total" : 123,
    "currentActivity" : {
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
    },
    "limitFlag" : 123,
    "price" : 123456789,
    "name" : "aeiou",
    "id" : 123456789,
    "detailUrl" : "aeiou",
    "introduction" : "aeiou",
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

exports.updateProduct = function(args, res, next) {
  /**
   * 更新产品
   * 更新产品
   *
   * body Body 最新的商品对象 (optional)
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  "limitMax" : 123,
  "photoUrls" : "aeiou",
  "priceType" : "aeiou",
  "largePhotoUrls" : "aeiou",
  "article" : {
    "name" : "aeiou",
    "id" : 123456789,
    "richText" : "aeiou"
  },
  "tags" : [ "aeiou" ],
  "shortIntroduction" : "aeiou",
  "catagory" : {
    "name" : "aeiou",
    "id" : 123456789
  },
  "total" : 123,
  "currentActivity" : {
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
  },
  "limitFlag" : 123,
  "price" : 123456789,
  "name" : "aeiou",
  "id" : 123456789,
  "detailUrl" : "aeiou",
  "introduction" : "aeiou",
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.updateProductWithForm = function(args, res, next) {
  /**
   * 使用表单更新产品
   * 
   *
   * productId String ID of product that needs to be updated
   * name String Updated name of the Product
   * status String Updated status of the Product
   * no response value expected for this operation
   **/
  res.end();
}

