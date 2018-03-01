var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var yearbookCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.get('/index', yearbookCtrl.index);



/*---------- Protected Routes ----------*/





module.exports = router;