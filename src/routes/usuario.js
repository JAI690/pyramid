const express = require('express');

const router = express.Router();
const pool = require('../database');

router.get('/favoritos', async(req,res) => {
    const id = req.user.usuario_id;
    const favoritos = await pool.query('SELECT * FROM Productos LEFT JOIN favoritos ON Productos.productos_id = favoritos.id_producto WHERE favoritos.id_user = ? ', id);
    console.log(favoritos);
    res.render("../views/Favoritos/favoritos.hbs", {favoritos});
});

router.post('/favoritos/:id', async(req,res) => {
    const { id } = req.params;
    const newLink = {
        id_user:  req.user.usuario_id,
        id_producto: id
    }
    await pool.query('INSERT INTO favoritos set ?', [newLink]);
    req.flash('success', 'Lead guardado correctamente');
    res.redirect('/favoritos');
})


router.get('/cuenta', async(req,res) => {
    const id = req.user.usuario_id;
    const usuario = await pool.query('SELECT * FROM Usuario WHERE usuario_id = ?;', id);
    console.log(id);
    console.log(usuario)
    res.render("../views/Cuenta/cuenta.hbs", {usuario});
});


module.exports = router;