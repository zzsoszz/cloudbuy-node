'use strict';
var schedule = require('node-schedule');
var knex=require("../db/connect.js");
var create=require("../db/create-database.js");
exports.init = function() {
    /**
      var j = schedule.scheduleJob("*\/5 * * * * *", function(){
            console.log('The answer to life, the universe, and everything!');
        });
     **/
    create.createDatabase().then(function(result){
        console.log(result);
        var user= knex('cuser').insert({phone: '13730666347',password:"123456"}).returning('*').then(function(data){
            console.log(data);
        });
    });
    // var user= knex('cuser').insert({phone: '13730666347',password:"123456"}).returning('*').then(function(data){
    //     console.log(data);
    // });
}

