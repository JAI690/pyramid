const express = require('express');



const router = express.Router();



router.get('/', (req,res) => {

res.render("../views/Home/home.hbs")
});

//../views/Contactanos/contactanos.hbs //le falta pop-ups
//../views/auth/signin.hbs
//../views/Productos/productos.hbs //no sirve, nomas era para ver las cards
//../views/Info_productos/info_productos.hbs//no sirve, nomas tiene info xs
//../views/Detalles_productos/detalles_productos.hbs
//../views/Favoritos/favoritos.hbs
//../views/Cuenta/cuenta.hbs

module.exports = router;