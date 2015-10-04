var express = require('express');
var router = express.Router();

// Members Page
router.get('/', doAThang, ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});

function doAThang(req, res, next){
	console.log('doin a thang');
	return next();
}

function ensureAuthenticated(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
