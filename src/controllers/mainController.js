const db = require ("../../database/models/");
const Op = db.Sequelize.Op;

const destinationFolder = '/img/productos_pcArmadas/';
const destinationFolderMarca = '/img/';

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    raiz:function (req,res) {
        db.Producto.findAll({ include: [{association:"categorias"}] })
        .then (function(productos){
        res.render("index", {productos, destinationFolder, destinationFolderMarca,toThousand})
        })
    },
    index:function (req,res) {
        db.Producto.findAll({ include: [{association:"categorias"}] })
        .then (function(productos){
        res.render("index", {productos, destinationFolder, destinationFolderMarca,toThousand})
        })
    },
    nosotros:function (req,res) {
        res.render("nosotros");
    },
    searchProduct: function (req, res) {
        db.Producto.findAll({ 
            
            include: [{association:"categorias"}], 
            
            where: {
                [Op.or]: [
                {titulo: {[Op.like]: '%'+ req.body.busqueda +'%'}},    
                {procesador: {[Op.like]: '%'+ req.body.busqueda +'%'}},
                {mother: {[Op.like]: '%'+ req.body.busqueda +'%'}},
                {video: {[Op.like]: '%'+ req.body.busqueda +'%'}},
                {ram: {[Op.like]: '%'+ req.body.busqueda +'%'}},
                {disco: {[Op.like]: '%'+ req.body.busqueda +'%'}},
                {gabinete: {[Op.like]: '%'+ req.body.busqueda +'%'}},
                {fuente: {[Op.like]: '%'+ req.body.busqueda +'%'}}
                ]
            }

    }).then (function(productos){
        res.render("search", {productos, destinationFolder, destinationFolderMarca})
    })
    }
}    
    
module.exports = mainController;