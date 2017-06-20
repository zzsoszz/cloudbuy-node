'use strict';

exports.createUser = function(args, res, next) {
  /**
   * 创建用户
   * 创建用户
   *
   * body Body_3 用户对象 (optional)
   * returns products_currentActivity_winuser
   **/
  var examples = {};
  examples['application/json'] = {
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
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.createUsersWithArrayInput = function(args, res, next) {
  /**
   * 批量创建用户
   * 
   *
   * body List List of user object (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.createUsersWithListInput = function(args, res, next) {
  /**
   * 批量创建用户
   * 批量创建用户
   *
   * body List List of user object (optional)
   * no response value expected for this operation
   **/
  res.end();
}

exports.deleteUser = function(args, res, next) {
  /**
   * 删除用户
   * 删除用户
   *
   * username String 目前是手机号(以后可能支持邮箱或者账户名)
   * no response value expected for this operation
   **/
  res.end();
}

exports.getUserByName = function(args, res, next) {
  /**
   * 根据登录名查询用户
   * 根据登录名查询用户
   *
   * username String 目前是手机号(以后可能支持邮箱或者账户名)
   * returns products_currentActivity_winuser
   **/
  var examples = {};
  examples['application/json'] = {
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
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getValidateionCode = function(args, res, next) {
  /**
   * 获取验证码
   * 获取验证码用于登录和注册
   *
   * username String 目前是手机号(以后可能支持邮箱或者账户名)
   * no response value expected for this operation
   **/
  res.end();
}

exports.loginUser = function(args, res, next) {
  /**
   * 用户登录
   * 用户登录
   *
   * username String 用户名(目前使用手机号) (optional)
   * password String 密码 (optional)
   * returns products_currentActivity_winuser
   **/
  var examples = {};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.logoutUser = function(args, res, next) {
  /**
   * Logs out current logged in user session
   * 
   *
   * no response value expected for this operation
   **/
  res.end();
}

exports.updateUser = function(args, res, next) {
  /**
   * 更新用户
   * 更新用户
   *
   * username String 目前是手机号(以后可能支持邮箱或者账户名)
   * body Body_4 新用户信息 (optional)
   * no response value expected for this operation
   **/
  res.end();
}

