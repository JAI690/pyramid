const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');

const helpers = require('../lib/helpers');



passport.use('local.signup', new LocalStrategy({

userNameField: 'user',

passwordField: 'password',

passReqToCallback: true

}, async(req,username,password,done) =>{

const { fullname, rol } = req.body;

const newUser = {

user,
nombre,
correo,
contraseña

};

newUser.password = await helpers.encryptPassword(password);

const result = await pool.query('INSERT INTO users SET ?', [newUser]);

newUser.id = result.insertId;

return done(null, newUser);

}));



passport.use('local.signin', new LocalStrategy({

userNameField: 'user',

passwordField: 'contraseña',

passReqToCallback: true

}, async(req,username,password,done) =>{

const rows = await pool.query('SELECT * FROM users WHERE user = ?', [username]);

if(rows.length > 0 ){

const user = rows[0];

const validPassword = await helpers.matchPassword(password,user.contraseña);

if(validPassword){

done(null, user, req.flash('success', 'Bienvenido ' + user.nombre));

}else {

done(null, false, req.flash('message', 'Contraseña invalida'));

}

} else{

return done(null, false, req.flash('message', 'Usuario invalido'));

}

}));



passport.serializeUser((user,done)=>{

done(null, user.id)

});




passport.deserializeUser(async (id,done) => {

    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    
    done(null, rows[0]);
    
    });

