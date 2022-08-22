const express = require ("express");
const path = require ('path');
const router = express.Router ();
const multer = require ('multer');
const authMiddlewares = require('../middlewares/authMiddlewares');
const validateProductMiddlewares = require ('../middlewares/validateProductMiddlewares');

// CONFIGURACIÓN DEL MULTER PARA GUARDAR Y ASIGNAR NOMBRE A LA SUBIDA DE ARCHIVOS POR UN FORMULARIO 
    let storage = multer.diskStorage ({

        destination: (req, file, cb) => {
            let destinationFolder = path.join (__dirname, '../../public/img/productos_pcArmadas');
            cb (null, destinationFolder);
        },

        filename: (req, file, cb) => {
            let imageName = "/pcArmadas_" + Date.now() + path.extname (file.originalname);
            cb (null, imageName);
        }
    })

let updateFile = multer ({storage});

// REQUERIMOS EL CONTROLADOR PARA DESPUES ACCEDER A SUS METODOS
const productsController = require ("../controllers/productsController");
const { route } = require("express/lib/application");


//CREATE
router.get ("/newProduct", authMiddlewares, productsController.newProduct);
router.post ("/newProduct", updateFile.single('foto'), productsController.createNewProduct);

//READ
router.get ("/products", productsController.product);
router.get ("/productDetail/:id", productsController.productDetail);
router.get ("/productCart", productsController.productCart);

//UPDATE
router.get ("/editProduct/:id", authMiddlewares, productsController.editProduct);
router.put ("/editProduct/:id", updateFile.single('foto'), validateProductMiddlewares, productsController.processEditProduct);
// router.get ("/products/productDetail/:id?/editProduct", productsController.editIndProduct);

//DELETE
router.delete ("/confirmDelete/:id", authMiddlewares, productsController.deleteProduct);
router.get ("/confirmDelete/:id", productsController.confirmDelete);

module.exports = router;
