https://github.com/cujojs/most/
15:52:04
qingtian 2017/7/3 15:52:04
https://cycle.js.org/api/http.html
16:07:57
qingtian 2017/7/3 16:07:57
https://segmentfault.com/a/1190000004151411

qingtian 2017/7/3 16:08:03
ѭ��������ʱ��Ϊʲô��������ѭ������
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
������˲��ԣ�mocha��chai��phantomjs
http://wiki.jikexueyuan.com/project/node-lessons/mocha-chai-phantomjs.html

qingtian 2017/7/3 17:18:11
https://github.com/alsotang/node-lessons/
��Node.js ���̲����ᡷ -- by alsotang
17:36:36
qingtian 2017/7/3 17:36:36
https://caolan.github.io/async/docs.html#mapLimit

qingtian 2017/7/3 17:37:04
nodejs�첽���ơ�co��async��Q ����es6ԭ��promise����then.js��bluebird���к���ȱ�㣿��ĸ����ĸ��򵥣�
https://www.zhihu.com/question/25413141

qingtian 2017/7/3 17:38:02
JSħ���ã�ES6�����ԡ���GeneratorFunction����
http://www.cnblogs.com/fsjohnhuang/p/4166267.html 

17:48:34
qingtian 2017/7/3 17:48:34
�� bluebird �����п��ư�һ�� concurrency ����ִ�� async function

qingtian 2017/7/3 17:48:38
https://cnodejs.org/topic/57700a1985e22178177edd89

qingtian 2017/7/3 17:50:25
http://www.tuicool.com/articles/fQviEb
bluebird 3.1/Node.js: ����Promise.all, map, reduce, mapSeries, each����






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
TypeScript �е� Decorator & Ԫ���ݷ��䣺��С�׵�ר�ң����� IV��
https://zhuanlan.zhihu.com/p/20743919 
http://blog.wolksoftware.com/the-current-state-of-dependency-inversion-in-javascript 
https://github.com/elastic/elasticsearch-js
https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/configuration.html


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