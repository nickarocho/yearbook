var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function index(req, res) {
  User.find({})
    .then((user) => res.json(user).status(200))
    .catch(err => console.log(err));
}

function showUser(req, res) {
  User.findById(req.params.id)
    .then((user) => res.json(user).status(200))
    .catch(err => console.log(err));
}

function updateData(req, res) {
  console.log(req.body)
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(function(user) {
      user.curStatement = req.body.curStatement;
      user.curJobs = req.body.curJobs;
      user.save();
      return user
    })
    .then((user) => res.json(user).status(200))
    .catch(err => console.log(err));
}

module.exports = {
  index,
  showUser,
  updateData
};