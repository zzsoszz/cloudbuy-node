var knex=require("../db/connect.js");
var elasticsearch = require('elasticsearch');
var client=require("./ElasticSearchClient");
exports.createIndex=function()
{
    client.getInstance().indices.create("product");
}
