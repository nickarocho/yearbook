var express = require('express');
var router = express.Router();
var yearbookCtrl = require('../../controllers/yearbook');
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/index', yearbookCtrl.index);
router.get('/:id', yearbookCtrl.showUser);
router.put('/:id/update', yearbookCtrl.updateData)

module.exports = router;