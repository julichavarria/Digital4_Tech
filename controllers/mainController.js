const pcArmadas =require ("./pcArmadas");

const mainController = {
    raiz:function (req,res) {
        res.render("index", {pcArmadas: pcArmadas});
    },
    index:function (req,res) {
        res.render("index", {pcArmadas: pcArmadas});
    },
}    
    
module.exports = mainController;