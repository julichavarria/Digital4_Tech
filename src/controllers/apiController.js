const db = require ("../../database/models/");
const Op = db.Sequelize.Op;

// const destinationFolder = '/img/productos_pcArmadas/';
// const destinationFolderMarca = '/img/';

const apiController = {
    listUsers:function (req,res) {
        db.Usuario.findAll()
        .then (function(usuarios){
            return res.status(200).json({
                total: usuarios.length,
                data: usuarios,
            })
        })
    },
    
    userDetail: function(req, res){
        db.Usuario.findByPk(req.params.id)
        .then (function (user){
            return res.status(200).json({
                nombre: user, //consultar por http://localhost en este caso o la direcion el dia de mañana, si es manual o existe una forma correcta
            })
        })
    },    

    listProducts:function (req,res) {
        db.Producto.findAll()
        .then (function(product){
            return res.status(200).json({
                total: product.length,
                data: product,
            })
        })
    },
    productDetail: function(req, res){
        db.Producto.findByPk(req.params.id)
        .then (function (product){
            return res.status(200).json({
                nombre: product, 
            })
        })
    },
}

module.exports = apiController;

