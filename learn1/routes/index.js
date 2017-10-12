var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers);

  var authHeader = req.headers.authorization;
  if (!authHeader){
    res.render('home', { title: 'Express' });  
  }
  else{
  var auth = new Buffer(authHeader.split(' ')[1],
  'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  console.log('auth:',auth)
  res.render('home', { title: 'Express' });
  }
});

module.exports = router;
