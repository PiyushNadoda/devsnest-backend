var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks')
var register = require('../controllers/register')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
 * LEVEL 1
 * @requires {email, password, confirmPassword} - req.body
 * @description
 * secrurity, performance and edge cases
 * email validation, password validation
 * LEVEL 2
 * JS / SQL injection
 * LEVEL 3
 * check if email already exists
 * password hash
 * email lower case
 * save 
 */
router.post('/register', registerInitialCheck, register)

module.exports = router;
