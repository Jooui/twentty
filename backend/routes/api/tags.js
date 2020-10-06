var router = require('express').Router();
var mongoose = require('mongoose');
var Release = mongoose.model('Release');

// return a list of tags
router.get('/', function(req, res, next) {
  Release.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
