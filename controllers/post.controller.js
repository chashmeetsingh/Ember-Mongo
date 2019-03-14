const Post = require('../models/post.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.post_get = function(req, res, next) {
  Post.find({}, function (err, posts) {
      if (err) return next(err);
      res.send({post: posts});
  })
};

exports.post_create = function (req, res, next) {
    let post = new Post(
        {
            title: req.body.body,
            body: req.body.title
        }
    );

    post.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Post Created successfully')
    })
};

exports.post_details = function (req, res, next) {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
};

exports.post_update = function (req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, post) {
        if (err) return next(err);
        res.send('Post udpated.');
    });
};

exports.post_delete = function (req, res) {
    Post.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};