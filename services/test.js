var request = require('request');
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var utilities = require('./utilities');
var ExcelLoad = require('./ExcelLoad');

ExcelLoad.read(function(data){
    console.log(data);
});
// function spider(url, callback) {
//     var filename = utilities.urlToFilename(url);
//     fs.exists(filename,
//     function(exists) {
//         if (!exists) {
//             console.log('Downloading ' + url);
//             request(url,
//             function(err, response, body) {
//                 if (err) {
//                     callback(err);
//                 } else {
//                     mkdirp(path.dirname(filename),
//                     function(err) {
//                         if (err) {
//                             callback(err);
//                         } else {
//                             fs.writeFile(filename, body,
//                             function(err) {
//                                 if (err) {
//                                     callback(err);
//                                 } else {
//                                     callback(null, filename, true);
//                                 }
//                             });
//                         }
//                     });
//                 }
//             });
//         } else {
//             callback(null, filename, false);
//         }
//     });
// }