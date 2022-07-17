const db = require ("../../database/models/");

const destinationFolder = '/img/productos_pcArmadas/';
const destinationFolderMarca = '/img/';


const mainController = {
    raiz:function (req,res) {
        db.Producto.findAll({ include: [{association:"categorias"}] })
        .then (function(productos){
        res.render("index", {productos, destinationFolder, destinationFolderMarca})
        })
    },
    index:function (req,res) {
        db.Producto.findAll({ include: [{association:"categorias"}] })
        .then (function(productos){
        res.render("index", {productos, destinationFolder, destinationFolderMarca})
        })
    },
    nosotros:function (req,res) {
        res.render("nosotros");
    },
}    
    
module.exports = mainController;