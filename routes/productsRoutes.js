const express = require ("express");
const router = express.Router ();

const productsController = require ("../controllers/productsController");

router.get ("/products", productsController.product);
router.get ("/productDetail/:id", productsController.productDetail);
router.get ("/productCart", productsController.productCart);
router.get ("/newProduct", productsController.newProduct);
router.get ("/editProduct/:id", productsController.editProduct);
router.get ("/products/productDetail/:id?/editProduct", productsController.editIndProduct);
router.put ("/editProduct/:id", productsController.processEditProduct);

module.exports = router;
