var elasticsearch = require('elasticsearch');
exports.getInstance=function()
{
    var client=null;
    return (function(){
        if(!client){
            client = new elasticsearch.Client({
                host: 'localhost:9200',
                log: 'trace'
            });
        }
        console.log("client",client);
        return client;
    })();
}