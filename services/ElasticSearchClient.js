var elasticsearch = require('elasticsearch');
exports.getInstance=function()
{
    var client=null;
    return (function(){
        if(!client){
            var client = new elasticsearch.Client({
                host: 'localhost:9200',
                log: 'trace'
            });
        }
        return client;
    })();
}