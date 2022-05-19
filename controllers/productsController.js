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
 
    // editIndProduct:function (req, res) {
    //     let prodSelect = pcArmadas[req.params.id];
    //     res.render("products/editProduct", {pcArmadas: prodSelect});
    // },
    // processEditProduct:function(req,res) {
    //     let prodSelect = pcArmadas[req.params.id];
    //     res.render("products/editProduct", {pcArmadas: prodSelect});

    // }



}


module.exports = productController;