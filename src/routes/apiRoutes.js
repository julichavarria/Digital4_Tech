const express = require ("express");
const router = express.Router ();

const apiController = require ("../controllers/apiController");

router.get ("/users", apiController.listUsers);
router.get ("/users/:id", apiController.userDetail);

module.exports = router;
