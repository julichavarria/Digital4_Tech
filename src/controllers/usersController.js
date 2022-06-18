const fs = require ('fs');
const path = require ('path');
const {validationResult} = require ('express-validator');


const usersFilePath = path.join (__dirname, '../data/users.json');
const usersJS = JSON.parse (fs.readFileSync (usersFilePath, 'utf-8'));
const destinationFolder = '/img/avatars/';

// funcion buscar ojetro segun ID
function obtenerUsuarios (idUsuario){
    let usuario = null;
         for (let i = 0; i<usersJS.length;i++){
            if (idUsuario == (usersJS[i].id)){
                usuario = usersJS[i];
                break;
            }
        }
        return usuario;
}


const usersController = {
    
    register: function (req,res) {
        res.render("users/register");
    },
    createNewRegister: function (req,res){
        console.log (req.body);
        let errores = validationResult (req);
        if (errores.isEmpty ()){
            let userNew = {
                id: usersJS.length + 1,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                usuario: req.body.usuario,
                email: req.body.email,
                contrasena: req.body.contrasena,
                rol: "cliente",
                avatar: "avatar01.jpg" //(req.file ? req.file.filename : 'defoulImage.jpg')
            }
            // AGREGA AL FINAL DEL ARRAY EL NUEVO PRODUTO
            usersJS.push (userNew);
    
            //ORDENA EL ARRAY POR ID
            usersJS.sort( (a, b) => (a.id > b.id) ? 1 : -1)
    
            //PASA A JSON Y LO ESCRIBES
            let usersJSON = JSON.stringify(usersJS, null, 4);
            fs.writeFileSync (usersFilePath, usersJSON);
    
            res.redirect ('/users/login');
        }
        else {
            res.render ('/users/register', {errores: errores.array(), old: req.body})
        }
        

    },
    editUser: function (req, res) {
        let userSelect = obtenerUsuarios(req.params.id);
        res.render("users/editUser", {usersJS: userSelect, destinationFolder});
    },
    processEditUser: function (req, res) {
        console.log (req.body)
    },

    login:function (req,res) {
        res.render("users/login");
    },
    usersList:function (req,res) {
        res.render("users/usersList");
    }
}    
    
module.exports = usersController;



