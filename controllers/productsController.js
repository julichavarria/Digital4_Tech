const pcArmadas =require ("./pcArmadas");

function obtenerProducto (idProducto){
    let producto = null;
         for (let i = 0; i<pcArmadas.length;i++){
            if (idProducto == (pcArmadas[i].id)){
                producto = pcArmadas[i];
                break;
            }
        }
        return producto;
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {

    ////////////////// SECCION COMPUTADORAS ARMADAS
    product: function(req, res) {
        res.render("products/products", {pcArmadas});
    },

    ////////////////// DETALLE DE PC SELECCIONADA
    productDetail:function (req,res) {
        let prodSelect = obtenerProducto(req.params.id);
        res.render("products/productDetail", {pcArmadas: prodSelect});
    },

    ////////////////// SECCION CARRITO
    productCart:function (req,res) {
        res.render("products/productCart");
    },

    ////////////////// CREAR NUEVO PRODUCTO PC ARMADA
    newProduct:function (req,res) {
        res.render("products/newProduct");
    },

    ////////////////// EDITAR PC ARMADA
    editProduct:function (req,res) {
        let prodSelect = obtenerProducto(req.params.id);
        res.render("products/editProduct", {pcArmadas: prodSelect});
    },

    processEditProduct: function (req, res) {
        let prodSelect = obtenerProducto(req.params.id);
        console.log(prodSelect);
        pcArmadas[prodSelect].titulo = req.body.titulo,
        pcArmadas[prodSelect].imagen =req.body.imagen,
        pcArmadas[prodSelect].prcesador = req.body.procesador,
        pcArmadas[prodSelect].mother = req.body.mother,
        pcArmadas[prodSelect].placaDeVideo = req.body.placaDeVideo,
        pcArmadas[prodSelect].memoriaRam = req.body.memoriaRam,
        pcArmadas[prodSelect].discoRigido = req.body.discoRigido,
        pcArmadas[prodSelect].gabinete = req.body.gabinete,
        pcArmadas[prodSelect].fuente = req.body.fuente,
        pcArmadas[prodSelect].precio = toThousand(req.body.titulo),

        console.log (req.body.titulo);
        res.redirect ('/product');
    }

}


module.exports = productController;