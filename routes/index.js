var express = require('express')
var router = express.Router();

//Get Homepage
router.get('/', ensureAuthenticated, function(req,res){
    res.render('index');
})

function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        //shows a message if you want them to see "you are not logged in" when they access the root page
        //req.flash('error_msg', 'You are not logged in');
        res.redirect('/users/login');
    }
}

module.exports = router;