const express = require('express');



const router = express.Router();



router.get('/', (req,res) => {

res.render("../views/Productos/productos.hbs")

});




module.exports = router;