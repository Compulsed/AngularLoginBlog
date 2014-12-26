'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  contents: String,
  posted: Date,
  public: Boolean 
});

module.exports = mongoose.model('Post', PostSchema);
