https://github.com/zoubin/streamify-your-node-program
https://github.com/jabez128/stream-handbook
https://github.com/htoooth/mississippi2#split
https://github.com/brianc/node-pg-query-stream
http://fe.meituan.com/stream-in-action.html
http://sequelize.readthedocs.io/en/latest/docs/transactions/
https://github.com/othiym23/node-continuation-local-storage


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