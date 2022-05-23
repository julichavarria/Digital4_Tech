// const pcArmadas =require ("./pcArmadas");
const fs = require ('fs');
const path = require ('path');

const pcArmadasFilePath = path.join (__dirname, '../data/pcArmadas.json');
const pcArmadasJSON = JSON.parse (fs.readFileSync (pcArmadasFilePath, 'utf-8'));


const mainController = {
    raiz:function (req,res) {
        res.render("index", {pcArmadasJSON: pcArmadasJSON});
    },
    index:function (req,res) {
        res.render("index", {pcArmadasJSON: pcArmadasJSON});
    },
}    
    
module.exports = mainController;