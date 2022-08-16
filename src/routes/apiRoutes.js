const express = require ("express");
const router = express.Router ();

const apiController = require ("../controllers/apiController");

router.get ("/users", apiController.listUsers);
router.get ("/users/:id", apiController.userDetail);

router.get ("/products", apiController.listProducts );
router.get ("/products/:id", apiController.productDetail);

module.exports = router;
