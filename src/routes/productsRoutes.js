const express = require ("express");
const path = require ('path');
const router = express.Router ();
const multer = require ('multer');

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
router.get ("/newProduct", productsController.newProduct);
router.post ("/newProduct", updateFile.single('foto'), productsController.createNewProduct);

//READ
router.get ("/products", productsController.product);
router.get ("/productDetail/:id", productsController.productDetail);
router.get ("/productCart", productsController.productCart);

//UPDATE
router.get ("/editProduct/:id", productsController.editProduct);
router.put ("/editProduct/:id", updateFile.single('foto'), productsController.processEditProduct);
// router.get ("/products/productDetail/:id?/editProduct", productsController.editIndProduct);

//DELETE
router.delete ("/editProduct/:id/deleteProduct/", productsController.deleteProduct);
router.get ("/confirmDelete/", productsController.confirmDelete);

module.exports = router;
