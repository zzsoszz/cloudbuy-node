var cheerio = require('cheerio');
var superagent = require('superagent');
var fs = require('fs');

  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
superagent.get('http://tool.chinaz.com/kwevaluate?kw=%E7%99%BE%E5%BA%A6')
  .end(function (err, res) {
    // 常规的错误处理
    if (err || !res.ok) {
       console.log('Oh no! error');
     } else {
       
        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
        // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
        // 剩下就都是 jquery 的内容了
         fs.writeFile("/tmp/test.txt", res.text, { flag: 'w' }, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
        var $ = cheerio.load(res.text);
        var text=$('body > div:nth-child(5) > div > ul > li.clearfix.lidtCont01 > div:nth-child(2) > a').html();
        console.log(text);
        
     }
     
  });