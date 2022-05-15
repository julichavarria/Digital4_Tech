const pcArmadas =require ("./pcArmadas");

const productController = {
    product: function(req, res) {
        res.render("products/products", {pcArmadas: pcArmadas});
    },
    productDetail:function (req,res) {
        let prodSelect = pcArmadas[req.params.id];
        res.render("products/productDetail", {pcArmadas: prodSelect});
    },
    productCart:function (req,res) {
        res.render("products/productCart");
    },
    newProduct:function (req,res) {
        res.render("products/newProduct");
    },
    editProduct:function (req,res) {
        let prodSelect = pcArmadas[req.params.id];
        res.render("products/editProduct", {pcArmadas: prodSelect});
    },
    editIndProduct:function (req, res) {
        let prodSelect = pcArmadas[req.params.id];
        res.render("products/editProduct", {pcArmadas: prodSelect});
    },
    processEditProduct:function(req,res) {
        
    }
}
module.exports = productController;