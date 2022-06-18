const express = require ("express");
const path = require ('path');
const router = express.Router ();
const { check } = require ('express-validator');
const multer = require ('multer');

const usersController = require ("../controllers/usersController");

// VALIDACIONES 
const validateUser = [ 
    check('nombre')
        .notEmpty().withMessage('Debes completar el nombre')
        .isLength({max: 25}).withMessage('25 caracteres como máximo el nombre'),
    check('apellido')
        .notEmpty().withMessage('Debes completar el apellido')
        .isLength({max: 20}).withMessage('20 caracteres como máximo el apellido'),
    check('email')
        .notEmpty().withMessage('Debes ingresar un mail')
        .isEmail().withMessage('Debes ingresar un mail valido'),
    check('usuario').notEmpty().withMessage('Debes completar el nombre de usuario'),
    check('contasena')
        .notEmpty().withMessage('Debes ingresar una contraseña')
        .isLength({min: 6}).withMessage('Debe ingresar un minimo de 6 caracterres para la contraseña')
];

// RUTAS
// REGISTRAR USUARIO NUEVO
router.get ("/register", usersController.register);
router.post ("/register", validateUser, usersController.createNewRegister);

// EDITAR USUARIO
router.get ("/editUser/:id", usersController.editUser);
router.put ("/editUser/:id", usersController.processEditUser);

//LOGIN
router.get ("/login", usersController.login);
router.get ("/usersList", usersController.usersList);


module.exports = router;
