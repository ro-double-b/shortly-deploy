var mongoose = require('../config');
var crypto = require('crypto');
// console.log(mongoose,'hiiidadsf');
Schema = mongoose.Schema;


var LinkSchema = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number
});

LinkSchema.methods.initialize = function() {
  this.on('creating', function(model, attrs, options) {
    var shasum = crypto.createHash('sha1');
    shasum.update(model.get('url'));
    model.set('code', shasum.digest('hex').slice(0, 5));
  });
};

mongoose.model('link', LinkSchema);
var Link = mongoose.model('link');

module.exports = Link;
