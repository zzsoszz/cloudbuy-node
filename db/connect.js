var knex = require('knex')({
  client: 'pg',
  version: '9.6',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'qy123456',
    database : 'postgres'
  }
});
module.exports = knex;
