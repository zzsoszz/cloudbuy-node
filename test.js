var knex=require("./db/connect.js");
knex.select().from('users')
.stream().on("data",function(data){
  console.log("aaaaaa:",data);
});


//var JSONStream = require('JSONStream');
// var stream = require('stream');
// var util = require('util');
// util.inherits(Answers, stream.Readable);
// function Answers(opt) {
//   stream.Readable.call(this, opt);
//   this.quotes = ["yes", "no", "maybe"];
//   this._index = 0;
// }
// Answers.prototype._read = function() {
//   if (this._index > this.quotes.length){
//     this.push(null);
//   } else {
//     this.push(this.quotes[this._index]);
//     this._index += 1;
//   }
// };
// var r = new Answers();
// r.on('data', function(data){
//   console.log("Callback read: " + data.toString());
// });
// r.on('end', function(data){
//   console.log("No more answers.");
// });
// r.on('readable',function(data)
// {
//    console.log('readable');
// });
