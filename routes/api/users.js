var express = require('express');
var router = express.Router();
var usersCtrl = require('./../../controllers/users');

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/index', usersCtrl.index);

module.exports = router;