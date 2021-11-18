const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');

const helpers = require('../lib/helpers');


passport.use('local.signup', new LocalStrategy({
    userNameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async(req,username,password,done) =>{
    const { nombre, correo, telefono } = req.body;
    const newUser = {
        username,
        password,
        nombre,
        correo,
        telefono
    };
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO Usuario SET ?', [newUser]);
    newUser.usuario_id = result.insertId;
    return done(null, newUser);
}));





passport.use('local.signin', new LocalStrategy({

userNameField: 'username',
passwordField: 'password',
passReqToCallback: true

}, async(req,user,password,done) =>{

const rows = await pool.query('SELECT * FROM Usuario WHERE username = ?', [user]);

if(rows.length > 0 ){

const user = rows[0];

const validPassword = await helpers.matchPassword(password,user.password);

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

done(null, user.usuario_id)

});




passport.deserializeUser(async (id,done) => {

    const rows = await pool.query('SELECT * FROM Usuario WHERE usuario_id = ?', [id]);
    
    done(null, rows[0]);
    
    });

