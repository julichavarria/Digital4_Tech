const db = require ("../../database/models/");
const productController = require("./productsController");
const Op = db.Sequelize.Op;

// const destinationFolder = '/img/productos_pcArmadas/';
// const destinationFolderMarca = '/img/';
const destinationUser = 'http://localhost:3030/users/userDetail/';
const destinationAvatar = 'http://localhost:3030/img/avatars/';
const destinarionProduct = 'http://localhost:3030/products/productDetail/';
const destinationImgProduct = 'http://localhost:3030/img/productos_pcArmadas/';

const apiController = {
    listUsers:function (req,res) {
        db.Usuario.findAll({
            attributes: [ 'id', 'usuario', 'email']
        })
        .then (function(usuarios){
            usuarios = usuarios.map(usuario => {
                return {
                id: usuario.id,
                usuario: usuario.usuario,
                email: usuario.email,
                detalle: destinationUser + usuario.id,
                }
            })
            return res.status(200).json({
                total: usuarios.length,
                data: usuarios,
            })
        })
    },
    
    userDetail: function(req, res){
        db.Usuario.findByPk(req.params.id)
        .then (function (user){
            let usuario = {
                id: user.id,
                nombre: user.nombre,
                apellido: user.apellido,
                usuario: user.usuario,
                email: user.email,
                detalle: destinationAvatar + user.avatar
            }
            return res.status(200).json({   
                data: usuario, //consultar por http://localhost en este caso o la direcion el dia de mañana, si es manual o existe una forma correcta
            })
        })
    },   

    listProducts:function (req,res) {
        //let listadoMarcas = {};
        db.Producto.findAll({ include: [{association:"categorias"}] })
        .then (function(productos){
            
            productos = productos.map(producto => {
                return {
                id: producto.id,
                titulo: producto.titulo,
                marca: producto.catedoria_id,
                procesador: producto.procesador,
                mother: producto.mother,
                video: producto.video,
                ram: producto.ram,
                disco: producto.disco,
                detalle: destinarionProduct + producto.id,
                }
            })
            return res.status(200).json({
                total: productos.length,
                data: productos,
                //fata countByCategory
            })
        })
    },
    productDetail: function(req, res){
        db.Producto.findByPk(req.params.id, { include: [{association:"categorias"}] })
        .then (function (product){
            let producto = {
                id: product.id,
                titulo: product.titulo,
                //falta la relacion de categoria. ya sea solo el campomarca o toda la tabla
                procesador: product.procesador,
                mother: product.mother,
                video: product.video,
                ram: product.ram,
                disco: product.disco,
                gabinete: product.gabinete,
                fuente: product.fuente,
                precio: product.precio,
                imagen: destinationImgProduct + product.imagen,
                }
            return res.status(200).json({
                data: producto,
            })
        })
    }
}

module.exports = apiController;

