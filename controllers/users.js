var User = require('../models/user.js');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  index
};

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      res.json({token: createJWT(user)});
    })
    // User data invalid
    .catch(err => {
      return res.status(400).json(err)
    });
}

function login(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        var token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  }).catch(err => res.status(401).json(err));
}

function index(req, res) {
  User.find({})
    .then((user) => res.json(user).status(200))
    .catch(err => console.log(err));
}

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  )
}
