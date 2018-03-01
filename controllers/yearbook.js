var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function index(req, res) {
  User.find({})
    .then((user) => res.json(user).status(200))
    .catch(err => console.log(err));
}

function showUser(req, res) {
  console.log(req.params.id)
  User.findById(req.params.id)
    .then((user) => res.json(user).status(200))
    .catch(err => console.log(err));
}

module.exports = {
  index,
  showUser
};