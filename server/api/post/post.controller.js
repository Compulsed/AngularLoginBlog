/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /posts              ->  index
 * POST    /posts              ->  create
 * GET     /posts/:id          ->  show
 * PUT     /posts/:id          ->  update
 * DELETE  /posts/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Post = require('./post.model');
var async = require('async');

// Get list of posts
exports.index = function(req, res) {
  var query = {};

  query.limit     =  req.query.limit    || 10;

  query.next      =  req.query.next     || new Date(0);
  query.previous  =  req.query.previous || new Date(0);

  query.info      =  req.query.info     || false;

  console.log(query);

  async.parallel({
    getPostInfo: function(callback){

      // If request does not want collection information, do not request any
      if(query.info === false)
        callback(null, {});
      else {
        Post.find().count().exec(function (err, count){
          callback(null, {
            totalItems: count // May not work
          });
        });
      }

    },

    getPosts: function(callback){
      console.log('FINDING GREATER THAN ---->', query.next);

      var PostsQuery =
        Post
        .find({
          posted: {
            $gte: query.next
          }
        })
      .sort()
      .limit(query.limit);


      callback(null, PostsQuery);
    }

  // Once the parallel requests have been completed, run this
  }, function(err, results){

    results.getPosts.exec(function (err, posts) {
      if(err) { return handleError(res, err); }

      return res.json(200, {
        data : posts,
        info : results.getPostInfo
      });
    });


  });

};

// Get a single post
exports.show = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  req.body.posted = new Date();

  console.log(req.body);

  Post.create(req.body, function(err, post) {
    if(err) { return handleError(res, err); }
    return res.json(201, post);
  });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Post.findById(req.params.id, function (err, post) {
    if (err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    var updated = _.merge(post, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, post);
    });
  });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    post.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
