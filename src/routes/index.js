const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render("../views/Home/home.hbs");
});

router.get('/', (req,res) => {
    res.render("../views/Home/home.hbs");
});

router.get('/contactanos', (req,res) => {
    res.render("../views/Contactanos/contactanos.hbs");
});

router.get('/productos', (req,res) => {
    res.render("../views/Productos/productos.hbs");
});

router.get('/info_productos', (req,res) => {
    res.render("../views/Info_productos/info_productos.hbs");
});

router.get('/detalles_productos', (req,res) => {
    res.render("../views/Detalles_productos/detalles_productos.hbs");
});

router.get('/detalles_productos', (req,res) => {
    res.render("../views/Detalles_productos/detalles_productos.hbs");
});

router.get('/politicas', (req,res) => {
    res.render("../views/Politicas/politicas.hbs");
});

router.get('/devoluciones', (req,res) => {
    res.render("../views/Devoluciones/devoluciones.hbs");
});

router.get('/terminos', (req,res) => {
    res.render("../views/TERMINOS_CONDICIONES/terminos_condiciones.hbs");
});

//../views/Contactanos/contactanos.hbs //le falta pop-ups
//../views/auth/signin.hbs
//../views/Productos/productos.hbs //no sirve, nomas era para ver las cards
//../views/Info_productos/info_productos.hbs//no sirve, nomas tiene info xs
//../views/Detalles_productos/detalles_productos.hbs
//../views/Favoritos/favoritos.hbs
//../views/Cuenta/cuenta.hbs
//../views/partials/footer.hbs
//../views/Info_envios/info_envios.hbs
//../views/Politicas/politicas.hbs


module.exports = router;