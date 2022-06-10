// const pcArmadas =require ("./pcArmadas");
const fs = require ('fs');
const path = require ('path');

const pcArmadasFilePath = path.join (__dirname, '../data/pcArmadas.json');
const pcArmadasJS = JSON.parse (fs.readFileSync (pcArmadasFilePath, 'utf-8'));
const destinationFolder = '/img/productos_pcArmadas/';


const mainController = {
    raiz:function (req,res) {
        res.render("index", {pcArmadasJS: pcArmadasJS, destinationFolder});
    },
    index:function (req,res) {
        res.render("index", {pcArmadasJS: pcArmadasJS, destinationFolder});
    },
    nosotros:function (req,res) {
        res.render("nosotros");
    },
}    
    
module.exports = mainController;