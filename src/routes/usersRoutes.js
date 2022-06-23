const express = require ("express");
const path = require ('path');
const router = express.Router ();
const clientMiddlewares = require('../middlewares/clientMiddlewares');
const adminMiddlewares = require ('../middlewares/adminMiddlewares');
const authMiddlewares = require('../middlewares/authMiddlewares');
const { check } = require ('express-validator');
const multerMiddlewares = require ('../middlewares/multerMiddlewares');



const usersController = require ("../controllers/usersController");

// VALIDACIONES 
const validateUser = [ 
    check('nombre')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({max: 25}).withMessage('25 caracteres como máximo para el nombre'),
    check('apellido')
        .notEmpty().withMessage('Debes completar el apellido').bail()
        .isLength({max: 20}).withMessage('20 caracteres como máximo para el apellido'),
    check('email')
        .notEmpty().withMessage('Debes ingresar un mail').bail()
        .isEmail().withMessage('Debes ingresar un mail valido'),
    check('usuario').notEmpty().withMessage('Debes completar el nombre de usuario'),
    check('contrasena')
        .notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({min: 6}).withMessage('Debe ingresar un minimo de 6 caracterres para la contraseña')
];

// RUTAS
// REGISTRAR USUARIO NUEVO
router.get ("/register", clientMiddlewares, usersController.register);
router.post ("/register", validateUser, multerMiddlewares,  usersController.createNewRegister);

// MOSTRAR DETALLES DE UN USUARIO
router.get ('/userDetail/:id', usersController.userDetail); // NO SE ESTA USANDO CONTROLAR Y BORRAR
router.get ('/profile', authMiddlewares, usersController.profile)

// EDITAR USUARIO
router.get ("/editUser/:id", usersController.editUser);
router.put ("/editUser/:id",  multerMiddlewares, usersController.processEditUser);

// ELIMINAR USUARIO
router.delete ("/deleteUser/:id", usersController.deleteUser);
router.get ("/confirmDelete/:id", usersController.confirmDelete);

//LOGIN
router.get ("/login", clientMiddlewares, usersController.login);
router.post ("/login", usersController.processLogin);
router.get ("/usersList", adminMiddlewares, usersController.usersList);
router.get ("/logout", usersController.logout);


module.exports = router;
