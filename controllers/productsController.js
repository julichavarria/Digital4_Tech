// const pcArmadas =require ("./pcArmadas");
const fs = require ('fs');
const path = require ('path');

const pcArmadasFilePath = path.join (__dirname, '../data/pcArmadas.json');
const pcArmadasJSON = JSON.parse (fs.readFileSync (pcArmadasFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function obtenerProducto (idProducto){
    let producto = null;
         for (let i = 0; i<pcArmadasJSON.length;i++){
            if (idProducto == (pcArmadasJSON[i].id)){
                producto = pcArmadasJSON[i];
                break;
            }
        }
        return producto;
}

const productController = {

    ////////////////// SECCION COMPUTADORAS ARMADAS
    product: function(req, res) {
        res.render("products/products", {pcArmadasJSON});
    },

    ////////////////// DETALLE DE PC SELECCIONADA
    productDetail:function (req,res) {
        let prodSelect = obtenerProducto(req.params.id);
        res.render("products/productDetail", {pcArmadasJSON: prodSelect});
    },

    ////////////////// SECCION CARRITO
    productCart:function (req,res) {
        res.render("products/productCart");
    },

    ////////////////// CREAR NUEVO PRODUCTO PC ARMADA
    newProduct:function (req,res) {
        console.log (req.body)
        res.render("products/newProduct");
    },

    ////////////////// EDITAR PC ARMADA
    editProduct:function (req,res) {
        let prodSelect = obtenerProducto(req.params.id);
        res.render("products/editProduct", {pcArmadasJSON: prodSelect});
    },

    processEditProduct: function (req, res) {
        let prodSelect = obtenerProducto(req.params.id);
        
        pcArmadasJSON[prodSelect].titulo = req.body.titulo,
        pcArmadasJSON[prodSelect].imagen =req.body.imagen,
        pcArmadasJSON[prodSelect].procesador = req.body.procesador,
        pcArmadasJSON[prodSelect].mother = req.body.mother,
        pcArmadasJSON[prodSelect].placaDeVideo = req.body.placaDeVideo,
        pcArmadasJSON[prodSelect].memoriaRam = req.body.memoriaRam,
        pcArmadasJSON[prodSelect].discoRigido = req.body.discoRigido,
        pcArmadasJSON[prodSelect].gabinete = req.body.gabinete,
        pcArmadasJSON[prodSelect].fuente = req.body.fuente,
        pcArmadasJSON[prodSelect].precio = toThousand(req.body.precio),
        console.log(prodSelect);
        res.redirect ('/product');
    }
}
module.exports = productController;