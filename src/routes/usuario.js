const express = require('express');

const router = express.Router();
const pool = require('../database');

router.get('/favoritos', (req,res) => {
    res.render("../views/Favoritos/favoritos.hbs");
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


router.get('/cuenta', (req,res) => {
    res.render("../views/Cuenta/cuenta.hbs");
});


module.exports = router;