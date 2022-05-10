const express = require ("express");
const router = express.Router ();

const mainController = require ("../controllers/mainController");
const productosController = require ("../controllers/productosController");

router.get ("/", mainController.raiz);

router.get ("/index",mainController.index);

router.get ("/register", mainController.register);

router.get ("/productDetail", mainController.productDetail);

router.get ("/login", mainController.login);

router.get ("/productCart", mainController.productCart);


module.exports = router;
