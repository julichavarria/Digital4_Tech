const express = require ("express");
const router = express.Router ();

// REQUERIMOS EL CONTROLADOR PARA DESPUES ACCEDER A SUS METODOS
const productsController = require ("../controllers/productsController");


//CREATE
router.get ("/newProduct", productsController.newProduct);

//READ
router.get ("/products", productsController.product);
router.get ("/productDetail/:id", productsController.productDetail);
router.get ("/productCart", productsController.productCart);

//UPDATE
router.get ("/editProduct/:id", productsController.editProduct);
router.put ("/editProduct/:id", productsController.processEditProduct);
// router.get ("/products/productDetail/:id?/editProduct", productsController.editIndProduct);

//DELETE

module.exports = router;
