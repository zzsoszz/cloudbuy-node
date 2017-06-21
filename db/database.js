var knex=require("./connect.js");

knex.schema.withSchema('public').createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
}).then(function(result){
    console.log(result);
});
