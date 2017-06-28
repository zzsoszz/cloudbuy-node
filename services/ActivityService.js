'use strict';
var knex=require("../db/connect.js");
exports.detail=function(id){
  
  knex("activity").where("id",id).select().then(function(result){
    console.log(result);
  });
  
}