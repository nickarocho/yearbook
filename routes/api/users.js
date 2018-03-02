var express = require('express');
var router = express.Router();
var usersCtrl = require('./../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/index', usersCtrl.index);



/*---------- Protected Routes ----------*/





module.exports = router;