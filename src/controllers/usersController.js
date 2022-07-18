const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../../database/models/");
const Op = db.Sequelize.Op;


const usersFilePath = path.join(__dirname, '../data/users.json');
const usersJS = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const destinationFolder = '/img/avatars/';


const usersController = {

    register: function (req, res) {
        res.render("users/register");
    },

    createNewRegister: function (req, res) {
        
        // VERIFICA SI EL AVATAR LLEGA POR USUARIO O PREDISEÑADO
        let avatarAguardar = null;
        if (req.file) {
            avatarAguardar = req.file.filename
        } else {
            avatarAguardar = req.body.avatar;
        }

        db.Usuario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            email: req.body.email,
            clave: bcryptjs.hashSync(req.body.contrasena, 10),
            rol_id: 2,
            avatar: avatarAguardar
        })

        res.redirect('/users/login');
    },


    editUser: function (req, res) {

        db.Usuario.findByPk(req.params.id, { include: [{ association: "rol" }] })
            .then(function (usuario) {
                res.render("users/editUser", { usuario });
            })
    },

    processEditUser: function (req, res) {

        db.Usuario.findByPk(req.params.id, { include: [{ association: "rol" }] })
            .then(function (usuario) {

                let avatarAguardar = (req.file ? req.file.filename : req.body.avatar)
                let rol = (req.body.rol == 'Administrador' ? 1 : 2);

                db.Usuario.update({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    usuario: req.body.usuario,
                    rol_id: rol,
                    avatar: avatarAguardar,
                },
                    {
                        where: { id: req.params.id }
                    });
            });
        res.redirect('/users/profile')
    },

    editPassword: function (req, res) {
        db.Usuario.findByPk(req.params.id, { include: [{ association: "rol" }] })
            .then(function (usuario) {
                res.render("users/editPassword", { usuario });
            })
    },

    processEditPassword: function (req, res) {

        db.Usuario.findByPk(req.params.id, { include: [{ association: "rol" }] })
            .then(function (usuario) {

                if ((bcryptjs.compareSync(req.body.contrasena, usuario.clave))) {
                    db.Usuario.update({ clave: bcryptjs.hashSync(req.body.contrasenaNueva, 10) },
                        { where: { id: req.params.id } });
                        res.redirect('/users/profile')
                } else {
                    res.render('users/editPassword', { errors: { contrasena: { msg: 'La antigua contraseña no es valida' } }, usuario });
                }
            })
    },

    confirmDelete: function (req, res) {
        db.Usuario.findByPk (req.params.id, { include: [{ association: "rol" }] })
        .then (function (usuario){
            res.render("users/confirmDelete", { usuario , destinationFolder});
        })
    },

    deleteUser: function (req, res) {
        db.Usuario.destroy ({ where: {id: req.params.id} });
        res.redirect('/users/usersList') // ultimo probelma
    },

    // VISTA Y PROCESO DE LOGIN
    login: function (req, res) {
        res.render("users/login");
    },

    processLogin: function (req, res) {

        db.Usuario.findOne({ where: { email: req.body.email } })
            .then(function (usuario) {
                //VALIDAMOS CONTRASEÑA INGRESADA CON HASH
                if ((bcryptjs.compareSync(req.body.contrasena, usuario.clave))) {
                    req.session.userLogged = usuario; //GUARDO EL USUARIO LOGEADO EN LA SESION DEL NAVEGADOR
                    res.redirect('profile')
                } else {
                    res.render('users/login', { errors: { email: { msg: 'Credenciales invalidas' } } });
                }
            }).catch(function (error) {
                res.render('users/login', { errors: { email: { msg: 'Email no Registrado' } } });
            })
    },

    profile: (req, res) => {
        db.Usuario.findByPk( req.params.id )
        .then( function (usuario){
            res.render('users/profile', { usuario: req.session.userLogged, destinationFolder });
        })
    },

    userDetail: (req, res) =>{
        db.Usuario.findByPk (req.params.id, { include: [{ association: "rol" }] } )
        .then(function(usuario){
            res.render ('users/userDetail', {usuario, destinationFolder});
        })
    },

    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/');
    },

    usersList: function (req, res) {
        db.Usuario.findAll({ include: [{ association: "rol" }] })
        .then(function(usuarios){
            res.render("users/usersList", { usuarios, destinationFolder })
        });
    },

}

module.exports = usersController;



