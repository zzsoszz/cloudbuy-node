https://github.com/cujojs/most/
15:52:04
qingtian 2017/7/3 15:52:04
https://cycle.js.org/api/http.html
16:07:57
qingtian 2017/7/3 16:07:57
https://segmentfault.com/a/1190000004151411

qingtian 2017/7/3 16:08:03
循环依赖的时候为什么不会无限循环引用
16:30:49
qingtian 2017/7/3 16:30:49
phanatomjs

qingtian 2017/7/3 16:30:58
http://wiki.jikexueyuan.com/project/node-lessons/mocha-chai-phantomjs.html
16:43:01
qingtian 2017/7/3 16:43:01
https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-geo-shape-query.html
16:56:31
qingtian 2017/7/3 16:56:31
var diContainer = require('./lib/diContainer')();
diContainer.register('dbName', 'example-db'); diContainer.register('tokenSecret', 'SHHH!'); diContainer.factory('db', require('./lib/db')); diContainer.factory('authService', require('./lib/authService')); diContainer.factory('authController', require('./lib/ authController'));
var authController = diContainer.get('authController');
app.post('/login', authController.login); app.get('/checkToken', authController.checkToken); 
17:17:31
qingtian 2017/7/3 17:17:31
浏览器端测试：mocha，chai，phantomjs
http://wiki.jikexueyuan.com/project/node-lessons/mocha-chai-phantomjs.html

qingtian 2017/7/3 17:18:11
https://github.com/alsotang/node-lessons/
《Node.js 包教不包会》 -- by alsotang
17:36:36
qingtian 2017/7/3 17:36:36
https://caolan.github.io/async/docs.html#mapLimit

qingtian 2017/7/3 17:37:04
nodejs异步控制「co、async、Q 、『es6原生promise』、then.js、bluebird」有何优缺点？最爱哪个？哪个简单？
https://www.zhihu.com/question/25413141

qingtian 2017/7/3 17:38:02
JS魔法堂：ES6新特性——GeneratorFunction介绍
http://www.cnblogs.com/fsjohnhuang/p/4166267.html 

17:48:34
qingtian 2017/7/3 17:48:34
用 bluebird 来运行控制按一定 concurrency 并发执行 async function

qingtian 2017/7/3 17:48:38
https://cnodejs.org/topic/57700a1985e22178177edd89

qingtian 2017/7/3 17:50:25
http://www.tuicool.com/articles/fQviEb
bluebird 3.1/Node.js: 关于Promise.all, map, reduce, mapSeries, each方法


http://taobaofed.org/blog/2016/01/14/nodejs-memory-leak-analyze/
记一次 Node.js 应用内存暴涨分析

深入JVM之GCRoots
http://blog.csdn.net/u010744711/article/details/51371535 



https://github.com/zoubin/streamify-your-node-program
https://github.com/jabez128/stream-handbook
https://github.com/htoooth/mississippi2#split
https://github.com/brianc/node-pg-query-stream
http://fe.meituan.com/stream-in-action.html
http://sequelize.readthedocs.io/en/latest/docs/transactions/
https://github.com/othiym23/node-continuation-local-storage

ramda.cn/docs/#and
ramdajs.com/docs/#pluck

https://github.com/inversify/inversify-express-example

https://www.quora.com/Whats-your-take-on-server-side-dependency-injection-tools-in-node-js 
Introducing InversifyJS
http://blog.wolksoftware.com/introducing-inversifyjs 
TypeScript 中的 Decorator & 元数据反射：从小白到专家（部分 IV）
https://zhuanlan.zhihu.com/p/20743919 
http://blog.wolksoftware.com/the-current-state-of-dependency-inversion-in-javascript 
https://github.com/elastic/elasticsearch-js
https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/configuration.html



https://caolan.github.io/async/
12:32:20
qingtian 2017/7/5 12:32:20
native promises vs bluebird promises
https://jsperf.com/native-promises-vs-bluebird-promises

qingtian 2017/7/5 12:33:00
promisifyAll

qingtian 2017/7/5 12:33:05
https://medium.com/@mlee277/es6-promises-vs-bluebird-7f6ef5f5362a
12:34:45
qingtian 2017/7/5 12:34:45
https://cnodejs.org/topic/56cd6234e135f51a1ae89b15

qingtian 2017/7/5 12:34:49
自己动手实现一个简单的Promise/A+的Promisify函数

qingtian 2017/7/5 12:36:10
https://cnodejs.org/topic/56cd6234e135f51a1ae89b15

qingtian 2017/7/5 12:36:36
https://github.com/iyuq/promisify
13:15:21
qingtian 2017/7/5 13:15:21
https://www.zhihu.com/question/19575320
13:21:51
qingtian 2017/7/5 13:21:51
https://www.nyse.com/index
14:18:48
qingtian 2017/7/5 14:18:48
https://github.com/kriskowal/q
14:42:42
qingtian 2017/7/5 14:42:42
https://xueqiu.com/
15:28:15
qingtian 2017/7/5 15:28:15
http://www.cnblogs.com/zhiyishou/p/4711735.html 


qingtian 2017/7/5 15:28:26
nodejs与Promise的思想碰撞

qingtian 2017/7/5 15:29:14
https://cnodejs.org/topic/560dbc826a1ed28204a1e7deNode.js最新技术栈之Promise篇

qingtian 2017/7/5 15:29:24
https://cnodejs.org/topic/560dbc826a1ed28204a1e7de
15:33:15
qingtian 2017/7/5 15:33:15
http://blog.fens.me/nodejs-async/
15:43:54
qingtian 2017/7/5 15:43:54
http://blog.csdn.net/hellochenlu/article/details/50081775 


qingtian 2017/7/5 15:44:01
 Nodejs-使用 promise 替代回调函数

qingtian 2017/7/5 15:44:35
http://wiki.jikexueyuan.com/project/node-lessons/promise.html

qingtian 2017/7/5 15:44:43
使用 promise 替代回调函数
15:55:54
qingtian 2017/7/5 15:55:54
https://www.promisejs.org/implementing/#then

qingtian 2017/7/5 15:56:01
Implementing

qingtian 2017/7/5 15:56:08
promise实现
16:02:31
qingtian 2017/7/5 16:02:31
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

qingtian 2017/7/5 16:02:36
Promise.prototype.then()

qingtian 2017/7/5 16:02:44
https://www.promisejs.org/implementing/#then






var stream = require('stream');
var util = require('util');
util.inherits(Answers, stream.Readable);
function Answers(opt) {
  stream.Readable.call(this, opt);
  this.quotes = ["yes", "no", "maybe"];
  this._index = 0;
}
Answers.prototype._read = function() {
  if (this._index > this.quotes.length){
    this.push(null);
  } else {
    this.push(this.quotes[this._index]);
    this._index += 1;
  }
};
var r = new Answers();
console.log("Direct read: " + r.read().toString());
r.on('data', function(data){
  console.log("Callback read: " + data.toString());
});
r.on('end', function(data){
  console.log("No more answers.");
});
r.on('readable',function(data)
{
   console.log('readable');
});