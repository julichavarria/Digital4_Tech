const express = require ("express");
const path = require ('path');
const router = express.Router ();
const multer = require('multer');
const clientMiddlewares = require('../middlewares/clientMiddlewares');
const adminMiddlewares = require ('../middlewares/adminMiddlewares');
const authMiddlewares = require('../middlewares/authMiddlewares');
//const multerMiddlewares = require ('../middlewares/multerMiddlewares');
const validateFormMiddlewares = require ('../middlewares/validateMiddlewares');
const { body } = require ('express-validator');

const usersController = require ("../controllers/usersController");


let storage = multer.diskStorage({

    destination: (req, file, cb) => {
        let destinationFolder = path.join(__dirname, '../../public/img/avatars/');
        cb(null, destinationFolder);
    },

    filename: (req, file, cb) => {
        let imageName = "avatars_" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
})

let updateFile = multer({ storage });

const validation = [ 
    body('nombre')
        .notEmpty().withMessage('Debes completar el nombre').bail()
        .isLength({max: 25}).withMessage('25 caracteres como máximo para el nombre'),
    body('apellido')
        .notEmpty().withMessage('Debes completar el apellido').bail()
        .isLength({max: 20}).withMessage('20 caracteres como máximo para el apellido'),
    body('email')
        .notEmpty().withMessage('Debes ingresar un mail').bail()
        .isEmail().withMessage('Debes ingresar un mail valido'),
    body('usuario').notEmpty().withMessage('Debes completar el nombre de usuario'),
    body('contrasena')
        .notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({min: 6}).withMessage('Debe ingresar un minimo de 6 caracterres para la contraseña'),

    //body('avatarPropio').custom ((value, {req}) => {
    //})
];

// RUTAS
// REGISTRAR USUARIO NUEVO
router.get ("/register", clientMiddlewares, usersController.register);
router.post ("/register", updateFile.single('avatarPropio'), validation, usersController.createNewRegister);

// MOSTRAR DETALLES DE UN USUARIO
router.get ('/profile', authMiddlewares, usersController.profile);
router.get ('/userDetail/:id', usersController.userDetail);

// EDITAR USUARIO
router.get ("/editUser/:id", authMiddlewares, usersController.editUser);
router.put ("/editUser/:id", updateFile.single('avatarPropio'), validation, usersController.processEditUser);

// EDITAR CONTRASEÑA
router.get ("/editPassword/:id", usersController.editPassword);
router.put ("/editPassword/:id", usersController.processEditPassword);

// ELIMINAR USUARIO
router.delete ("/deleteUser/:id", usersController.deleteUser);
router.get ("/confirmDelete/:id", usersController.confirmDelete);

//LOGIN
router.get ("/login", clientMiddlewares, usersController.login);
router.post ("/login", usersController.processLogin);
router.get ("/usersList", adminMiddlewares, usersController.usersList);
router.get ("/logout", usersController.logout);


module.exports = router;