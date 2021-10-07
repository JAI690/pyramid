const express = require('express');

const router = express.Router();

const passport = require('passport');

const {isLoggedIn,isNotLoggedIn} = require('../lib/auth');





router.get('/signup', (req,res)=>{

res.render('./auth/signup.hbs');

});



router.post('/signup', passport.authenticate('local.signup', {

successRedirect: '/profile',

failureRedirect: '/signup',

failureFlash: true

}));



router.get('/signin', isNotLoggedIn, (req,res)=>{

res.render('./auth/signin.hbs');

});




router.post('/signin', isNotLoggedIn, (req,res,next)=>{

passport.authenticate('local.signin', {

successRedirect: '/profile',

failureRedirect: '/signin',

failureFlash: true

})(req,res,next);

});


router.get('/profile', isLoggedIn, (req,res) => {



    res.send('Hola mundo');
    
    
    
    });
    
    
    
    router.get('/logout', (req,res) => {
    
    req.logOut();
    
    res.redirect('/signin')
    
    });
    
    
    
    module.exports = router;