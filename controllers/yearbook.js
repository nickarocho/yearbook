var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function index(req, res) {
  User.find({})
    .then((user) => res.json(user).status(200))
    .catch(err => console.log(err));
}

module.exports = {
  index
};