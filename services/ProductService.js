var knex=require("../db/connect.js");
var elasticsearch = require('elasticsearch');
var client=require("./ElasticSearchClient");
exports.createIndex=function()
{
    console.log("create index");
    client.getInstance().indices.create("product").then(function(result){
        console.log("result",result);
    }).catch(function(e){
        console.log(e);
    });
    console.log("create index end");
}
