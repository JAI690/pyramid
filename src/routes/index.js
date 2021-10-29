const express = require('express');



const router = express.Router();



router.get('/', (req,res) => {

res.render("../views/Info_productos/info_productos.hbs")
});

//../views/Contactanos/contactanos.hbs
//../views/auth/signin.hbs
//../views/Productos/productos.hbs
//../views/Info_productos/info_productos.hbs

module.exports = router;