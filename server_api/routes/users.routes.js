var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users.controllers');

//locations API requests
router.get('/users', ctrlUsers.getUsers);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a thang');
});

module.exports = router;
