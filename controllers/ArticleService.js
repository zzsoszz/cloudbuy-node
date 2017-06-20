'use strict';

exports.findByID = function(args, res, next) {
  /**
   * findByID
   * 根据ID查找文章
   *
   * id String Article ID
   * keyword String 搜索关键词 (optional)
   * returns products_article
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "id" : 123456789,
  "richText" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

