var knex=require("../db/connect.js");
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});
exports.create=function()
{

}