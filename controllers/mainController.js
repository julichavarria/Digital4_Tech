// const pcArmadas =require ("./pcArmadas");
const fs = require ('fs');
const path = require ('path');

const pcArmadasFilePath = path.join (__dirname, '../data/pcArmadas.json');
const pcArmadasJS = JSON.parse (fs.readFileSync (pcArmadasFilePath, 'utf-8'));


const mainController = {
    raiz:function (req,res) {
        res.render("index", {pcArmadasJS: pcArmadasJS});
    },
    index:function (req,res) {
        res.render("index", {pcArmadasJS: pcArmadasJS});
    },
    nosotros:function (req,res) {
        res.render("nosotros");
    },
}    
    
module.exports = mainController;