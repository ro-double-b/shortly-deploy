var mongodb = require('mongodb'); //
var mongoose = require('mongoose');

// var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017';
// var linkColl;
// var userColl;
mongoose.connect(url, function(err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB!');
  } else {
    console.log('Connected to the mongoDB at ', url);
  }
});

module.exports = mongoose;
// module.exports.schema = mongoose.Schema;

// var db = mongoose

// module.exports = mongoose;

// module.exports.Link = linkColl;
// module.exports.User = userColl;
// var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;
