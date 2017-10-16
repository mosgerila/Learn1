var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers);

  var authHeader = req.headers.authorization;
  if (!authHeader){
    
            var err = new Error('You are not authenticated!');
        err.status = 401;
        next(err);
        return;
  }
  else{
  var auth = new Buffer(authHeader.split(' ')[1],
  'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  console.log('auth:',auth)
  if (user == 'mos' && pass == 'mos'){
  res.render('home', { title: 'Express' });
  }
  else{
     var err = new Error('You are not authenticated!');
        err.status = 401;
        next(err);
  }
} 
 //res.render('home', { title: 'Express' });
});

router.get('/',function(err,req,res,next) {
            res.writeHead(err.status || 500, {
            'WWW-Authenticate': 'Basic',
            'Content-Type': 'text/plain'
        });
        res.end(err.message);
});

module.exports = router;
