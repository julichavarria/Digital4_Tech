const path = require ("path");

const mainController = {
    raiz:function (req,res) {
        res.render(path.join(__dirname, "../views/index.ejs" ) );
    },
    index:function (req,res) {
        res.render(path.join(__dirname, "../views/index.ejs" ) );
    },
    register:function (req,res) {
        res.render(path.join(__dirname, "../views/users/register.ejs" ) );
    },
    productDetail:function (req,res) {
        res.render(path.join(__dirname, "../views/product/productDetail.ejs" ) );
    },
    login:function (req,res) {
        res.render(path.join(__dirname, "../views/users/login.ejs" ) );
    },
    productCart:function (req,res) {
        res.render(path.join(__dirname, "../views/product/productCart.ejs" ) );
    },
}    
    

module.exports = mainController;
console.log(__dirname);

