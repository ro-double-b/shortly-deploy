var mongoose = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
// console.log(mongoose, 'hidsfha;sdfa');
Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String
});

UserSchema.method = {
  initialize: function() {
    this.on('creating', this.hashPassword);
  },

  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },

  hashPassword: function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this).then(function(hash) {
      this.set('password', hash);
    });
  }
};

mongoose.model('user', UserSchema);
var User = mongoose.model('user');
module.exports = User;
