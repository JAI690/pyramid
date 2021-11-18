const express = require('express');
const router = express.Router();
const pool = require('../database');
const {isLoggedIn} = require('../lib/auth');

router.get('/favoritos',isLoggedIn, async(req,res) => {
    const id = req.user.usuario_id;
    const favoritos = await pool.query('SELECT * FROM Productos LEFT JOIN favoritos ON Productos.productos_id = favoritos.id_producto WHERE favoritos.id_user = ? ', id);
    console.log(favoritos);
    res.render("../views/Favoritos/favoritos.hbs", {favoritos});
});

router.post('/favoritos/:id',isLoggedIn, async(req,res) => {
    const { id } = req.params;
    const id_user = req.user.usuario_id
    const existentes = await pool.query('SELECT * FROM favoritos WHERE id_user = ? AND id_producto = ?;', [id_user,id]);
    const newLink = {
        id_user,
        id_producto: id
    }

    if(existentes.length > 0 ){
        req.flash('message', 'Ya has guardado este producto');
        res.redirect('/favoritos');
    }else{
        await pool.query('INSERT INTO favoritos set ?', [newLink]);
        req.flash('success', 'Producto guardado correctamente');
        res.redirect('/favoritos');
    }
})

router.post('/eliminar/:id',isLoggedIn, async(req,res) => {
    const { id } = req.params;
    const id_user = req.user.usuario_id;
    await pool.query('DELETE FROM favoritos WHERE id_user = ? AND id_producto = ?;', [id_user,id]);
    req.flash('success', 'Lead guardado correctamente');
    res.redirect('/favoritos');
})


router.get('/cuenta',isLoggedIn, async(req,res) => {
    const id = req.user.usuario_id;
    const usuario = await pool.query('SELECT * FROM Usuario WHERE usuario_id = ?;', id);
    res.render("../views/Cuenta/cuenta.hbs", {usuario});
});


module.exports = router;