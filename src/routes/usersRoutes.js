const express = require ("express");
const path = require ('path');
const router = express.Router ();
const multer = require('multer');
const clientMiddlewares = require('../middlewares/clientMiddlewares');
const adminMiddlewares = require ('../middlewares/adminMiddlewares');
const authMiddlewares = require('../middlewares/authMiddlewares');
//const multerMiddlewares = require ('../middlewares/multerMiddlewares');
const validateFormMiddlewares = require ('../middlewares/validateMiddlewares');

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

// RUTAS
// REGISTRAR USUARIO NUEVO
router.get ("/register", clientMiddlewares, usersController.register);
router.post ("/register", updateFile.single('avatarPropio'), validateFormMiddlewares, usersController.createNewRegister);

// MOSTRAR DETALLES DE UN USUARIO
router.get ('/userDetail/:id', usersController.userDetail); // NO SE ESTA USANDO CONTROLAR Y BORRAR
router.get ('/profile', authMiddlewares, usersController.profile);

// EDITAR USUARIO
router.get ("/editUser/:id", usersController.editUser);
router.put ("/editUser/:id", usersController.processEditUser);

// ELIMINAR USUARIO
router.delete ("/deleteUser/:id", usersController.deleteUser);
router.get ("/confirmDelete/:id", usersController.confirmDelete);

//LOGIN
router.get ("/login", clientMiddlewares, usersController.login);
router.post ("/login", usersController.processLogin);
router.get ("/usersList", adminMiddlewares, usersController.usersList);
router.get ("/logout", usersController.logout);


module.exports = router;