const express = require('express');

const router = express.Router();

router.get('/favoritos', (req,res) => {
    res.render("../views/Favoritos/favoritos.hbs");
});


router.get('/cuenta', (req,res) => {
    res.render("../views/Cuenta/cuenta.hbs");
});


module.exports = router;