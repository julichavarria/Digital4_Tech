const express = require ("express");
const path = require ('path');
const router = express.Router ();
const multer = require ('multer');

const usersController = require ("../controllers/usersController");


router.get ("/register", usersController.register);
router.post ("/register", usersController.createNewRegister);
router.get ("/login", usersController.login);
router.get ("/usersList", usersController.usersList);


module.exports = router;
