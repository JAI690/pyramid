const express = require('express');
const pool = require('../database');
const router = express.Router();


router.get('/', async(req,res) => {
    const productos = await pool.query('SELECT * FROM Productos');
    const ofertas = await pool.query('SELECT * FROM Productos WHERE ofertas = 1;');
    res.render("../views/Home/home.hbs", {productos,ofertas});
});

router.get('/contactanos', (req,res) => {
    res.render("../views/Contactanos/contactanos.hbs");
});

router.get('/luxor', async(req,res) => {
    const productos = await pool.query('SELECT * FROM Productos WHERE modelo = "Luxor";');
    res.render("../views/Productos/productos.hbs", {productos});
});

router.get('/piramicama', async(req,res) => {
    const productos = await pool.query('SELECT * FROM Productos WHERE modelo != "Luxor" AND ofertas = 0;');
    res.render("../views/Productos/productos.hbs", {productos});
});

router.get('/info_productos/:id', async(req,res) => {
    const {id} = req.params;
    const producto = await pool.query('SELECT * FROM Productos WHERE productos_id = ?', id);
    res.render("../views/Info_productos/info_productos.hbs", {producto});
});

router.get('/detalles_productos/:id', async(req,res) => {
    const {id} = req.params;
    const producto = await pool.query('SELECT * FROM Productos WHERE productos_id = ?', id);
    res.render("../views/Detalles_productos/detalles_productos.hbs", {producto});
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

router.get('/info', (req,res) => {
    res.render("../views/Info_envios/info_envios.hbs");
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