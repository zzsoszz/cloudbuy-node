var knex=require("../db/connect.js");
var client=require("./ElasticSearchClient");

exports.createIndex=function()
{
    console.log("create index start");
    console.log(client.getInstance==client.getInstance);
    var instance=client.getInstance();
    instance.indices.create({index:"product"}).then(function(result){
        console.log("result",result);
    }).catch(function(e){
        console.log(e);
    });
    

    /*
    instance.bulk({
        body: [
            // action description
            { index:  { _index: 'myindex', _type: 'mytype', _id: 1 } },
            // the document to index
            { title: 'foo' },
            // action description
            { update: { _index: 'myindex', _type: 'mytype', _id: 2 } },
            // the document to update
            { doc: { title: 'foo' } },
            // action description
            { delete: { _index: 'myindex', _type: 'mytype', _id: 3 } },
            // no document needed for this delete
        ]
    }, function (err, resp) {
        console.log("bulk",resp);
    });
    */
    

    instance.index({
        index: 'product',
        type: 'product',
        id: '1',
        body: {
            title: 'Test 1',
            productName: "苹果"
        }
    }, function (error, response) {
        console.log("response",response);
    });

    /*
        http://caolan.github.io/async/docs.html#series
     */
    instance.search(
        {
            index: 'product',
            body: {
                query: {
                    match: {
                        _all: '苹果'
                    }
                }
            }
        },
        function (error, response) {
           console.log("response",response);
        }
    );
    
    console.log("create index end");

}
