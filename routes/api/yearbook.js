var express = require('express');
var router = express.Router();
var User = require('../../models/user');
var yearbookCtrl = require('../../controllers/yearbook');

/*---------- Public Routes ----------*/
router.get('/index', yearbookCtrl.index);
router.get('/:id', yearbookCtrl.showUser);



/*---------- Protected Routes ----------*/





module.exports = router;